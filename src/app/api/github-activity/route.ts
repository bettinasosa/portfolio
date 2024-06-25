import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN });

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME;
    if (!username) {
      throw new Error('GitHub username is not set in environment variables');
    }

    const query = `
      query($username: String!) {
        user(login: $username) {
          name
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
            restrictedContributionsCount
          }
        }
      }
    `;

    const response: any = await octokit.graphql(query, { username });
    const calendar = response.user.contributionsCollection.contributionCalendar;
    const restrictedCount =
      response.user.contributionsCollection.restrictedContributionsCount;

    const contributions = calendar.weeks.flatMap(
      (week: { contributionDays: any[] }) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount
        }))
    );

    return NextResponse.json({
      contributions,
      totalContributions: calendar.totalContributions,
      restrictedContributions: restrictedCount,
      name: response.user.name
    });
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}
