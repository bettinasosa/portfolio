'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import ProjectHero from '@/app/projects/project/hero';
import Image from 'next/image';

export default function StyleSync() {
  const heroText =
    'is an innovative IoT and machine learning project that creates a personalized' +
    ' music experience by correlating clothing choices with listening habits. The' +
    ' system uses NFC-tagged clothing and Spotify listening history to generate' +
    ' custom playlists tailored to the users activities and moods';

  const phrase =
    'The potential applications extend beyond personal use, offering insights into consumer behavior for the fashion and music industries, and opening up possibilities for mood-enhancing technologies in various sectors.';

  const text2 =
    'Future Enhancements\n' +
    '\n' +
    'Integration with smart home systems for automatic music ambiance adjustment\n' +
    'Expansion to include other wearable devices for more comprehensive data collection\n' +
    'Implementation of more advanced ML techniques like deep learning for improved predictions\n' +
    'Development of a recommendation system for new music discovery based on clothing preferences\n' +
    '\n' +
    'Smart Jukebox represents the intersection of fashion, technology, and music, creating a unique and personalized experience that adapts to your lifestyle.';

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="pt-10">
      <ProjectHero
        description={heroText}
        media={'/images/stylesync/hero.svg'}
        isImage={true}
        title={'AI Fashion-Music Curator'}
        bgColour={'background'}
      />

      <div className="mx-8 sm:mx-24">
        <div className="mb-8 flex h-auto w-full justify-center">
          <div className="text-center">
            <Image
              src="/images/stylesync/diagram.png"
              alt="system diagram"
              width={800}
              height={400}
            />
            <h1 className="mb-4 text-xl font-semibold">System diagram</h1>
          </div>
        </div>
        <section className="mb-8 gap-12 sm:grid sm:grid-cols-2">
          <ol>
            <h2 className="mb-4 text-2xl font-semibold">Data Collection</h2>
            <p>The system collects data from two primary sources:</p>
            <li>
              <strong>Clothing Data:</strong> Using RFID-RC522 sensor with a
              Raspberry Pi 3B+, the system reads NTAG213 tags attached to
              clothing items. Each scan records the item and timestamp.
            </li>
            <li>
              <strong>Music Data:</strong> Utilizing the Spotify API, the system
              fetches detailed track features including danceability,
              acousticness, energy, instrumentalness, valence, and more.
            </li>
          </ol>
          <div>
            <Image
              src="/images/stylesync/board.png"
              alt="Clothing Tagging"
              width={400}
              height={400}
            />
            <h2>Schematic of the RPi to RC-522 sensor</h2>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Data Analysis and Clustering
          </h2>
          <p>
            The core of the StyleSync system lies in its data analysis and
            clustering approach:
          </p>
          <ol>
            <li>
              <strong>Data Normalization:</strong> Track features are normalized
              to ensure comparability. For instance, loudness is scaled to match
              the 0-1 range of other features.
            </li>
            <li>
              <strong>Feature Selection:</strong> Based on initial analysis,
              less relevant features like &apos;speechiness&apos; and
              &apos;liveness&apos; were dropped to focus on more impactful
              attributes.
            </li>
            <div className="flex justify-center">
              <Image
                src="/images/stylesync/normalised.png"
                alt="Clothing Tagging"
                width={900}
                height={400}
              />
            </div>
          </ol>
          <ol className="mt-12 gap-14 sm:grid sm:grid-cols-2">
            <li>
              <strong>K-means Clustering:</strong> The system uses k-means
              clustering to group songs into distinct mood categories. The
              optimal number of clusters (k=4) was determined using the elbow
              method.
              <Image
                src="/images/stylesync/elbow.png"
                alt="system diagram"
                width={500}
                height={400}
              />
            </li>
            <li>
              <strong>Principal Component Analysis (PCA):</strong> To visualize
              the high-dimensional data, PCA was employed, revealing clear
              separation between the four identified clusters.
              <Image
                src="/images/stylesync/pca.png"
                alt="system diagram"
                width={500}
                height={400}
              />
            </li>

            <section id="cluster-interpretation">
              <p className="pb-6">
                The four identified clusters correspond to distinct music moods:
              </p>
              <ul className="space-y-6">
                <li>
                  <strong>Cluster 0 (Study):</strong> High acousticness and
                  instrumentalness, typically classical music.
                </li>
                <li>
                  <strong>Cluster 1 (Happy):</strong> High valence, upbeat
                  tracks.
                </li>
                <li>
                  <strong>Cluster 2 (Chill):</strong> Moderate values across
                  features, relaxed music.
                </li>
                <li>
                  <strong>Cluster 3 (Energetic):</strong> High energy, often
                  associated with running or workout playlists.
                </li>
              </ul>
              <div className="image-placeholder">Cluster Mean Values Chart</div>
            </section>
            <Image
              src="/images/stylesync/clusters.png"
              alt="CLuster Mean Values Chart"
              width={500}
              height={400}
            />
          </ol>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Machine Learning Model
          </h2>
          <p>
            To predict the appropriate music mood based on clothing choices, the
            clustered data was exported to CSV files with their respective
            &apos;mood&apos; labels.
          </p>
          <li>
            Several classification models were tested, with the Random Forest
            Classifier proving most accurate.
          </li>
          <li>
            The model uses clothing data as input to predict the most suitable
            music mood cluster.
          </li>
          <div className="mt-6">Random Forest Confusion Matrix</div>
          <div className="flex justify-center">
            <Image
              src="/images/stylesync/confusion.png"
              alt="CLuster Mean Values Chart"
              width={800}
              height={400}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Data visualisations</h2>
          <iframe
            className="w-full"
            width="600"
            height="480"
            src="https://charts.mongodb.com/charts-project-0-bgega/embed/charts?id=84119c93-5323-4e1f-a192-b60a49948e1e&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
          <iframe
            className="w-full"
            width="600"
            height="480"
            src="https://charts.mongodb.com/charts-project-0-bgega/embed/charts?id=81d29648-c437-411e-9fda-db0eec7d033a&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
          <iframe
            className="w-full"
            width="600"
            height="480"
            src="https://charts.mongodb.com/charts-project-0-bgega/embed/charts?id=b4ef166d-3942-4ee7-9c54-30ee611dfee8&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Future Enhancements</h2>
          <ul>
            <li>
              Incorporate more data sources (e.g., location, time of day) for
              more nuanced recommendations.
            </li>
            <li>
              Implement more sophisticated models to capture complex
              relationships between clothing and music preferences.
            </li>
            <li>
              Develop a more intuitive user interface for real-time music
              recommendations.
            </li>
          </ul>
        </section>

        <p className="conclusion">
          StyleSync demonstrates the potential of combining IoT, machine
          learning, and music streaming technologies to create a truly
          personalized user experience, bridging the gap between physical
          fashion choices and digital music preferences.
        </p>
      </div>
    </div>
  );
}
