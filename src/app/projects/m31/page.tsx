import ProjectBody from '@/app/projects/body';
import ProjectsCarousel from '@/components/projectPage/projectsCarousel';
import ProjectHero from '@/components/projectPage/projectHero';

export default function M31Project() {
  const introduction =
    'Andromeda is a new audio-tactile gaming system that promotes socially inclusive play between visually impaired and sighted individuals. ' +
    'It expands the non-visual output of existing games, opening up the possibility for ' +
    'people with severe visual impairments to explore digital spaces and experience games.';

  const description = 'Explore Worlds Through Feel and Sound';
  const myRole =
    'As a web designer and full stack software engineer, I was heavily involved in all aspects of the Andromeda project,' +
    'from the initial concept to the final launch. I worked closely with the team to develop the overall aesthetics,' +
    'brand identity, and user interface/user experience (UI/UX) design of the product, as well as the engineering of the audio-tactile gaming system.';
  return (
    <div>
      <ProjectHero
        description={description}
        media={'https://www.youtube.com/embed/bXaLimCtK50'}
        isImage={false}
        title={'M31'}
      />
      <ProjectBody
        introduction={introduction}
        myRole={myRole}
        paragraphs={[]}
        slides={[]}
        subtitle={'Expanding the Non-Visual Output of Games'}
        video={'https://www.youtube.com/embed/bXaLimCtK50'}
      />
      <ProjectsCarousel />
    </div>
  );
}
