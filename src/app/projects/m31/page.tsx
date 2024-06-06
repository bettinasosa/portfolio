import ProjectBody from '@/app/projects/projects/body';
import ProjectsCarousel from '@/app/projects/projects/carousel';
import ProjectHero from '@/app/projects/projects/hero';
import PageScrollParallax from '@/components/pageScrollParallax';
import Picture1 from './/../../../../public/assets/m31/controller.jpg';
import Picture3 from './/../../../../public/assets/m31/app.png';
import Picture5 from './/../../../../public/assets/m31/research.png';
import Picture2 from './/../../../../public/assets/m31/packaging.png';
import Picture4 from './/../../../../public/assets/m31/specs.png';
import Picture6 from './/../../../../public/assets/m31/system.png';

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
        subtitle={'Expanding the Non-Visual Output of Games'}
        video={'https://www.youtube.com/embed/bXaLimCtK50'}
      />
      <PageScrollParallax
        title={'Expanding the Non-Visual Output of Games'}
        body={
          'Andromeda is a new audio-tactile gaming system that promotes socially inclusive play between visually impaired and sighted individuals. ' +
          'It expands the non-visual output of existing games, opening up the possibility for ' +
          'people with severe visual impairments to explore digital spaces and experience games.'
        }
        word={'Explore Worlds Through Feel and Sound'}
        staticImgs={[Picture1, Picture2, Picture3]}
      />
      <PageScrollParallax
        title={'Expanding the Non-Visual Output of Games'}
        body={
          'As a web designer and full stack software engineer, I was heavily involved in all aspects of the Andromeda project,' +
          'from the initial concept to the final launch. I worked closely with the team to develop the overall aesthetics,' +
          'brand identity, and user interface/user experience (UI/UX) design of the product, as well as the engineering of the audio-tactile gaming system.'
        }
        word={'Explore Worlds Through Feel and Sound'}
        staticImgs={[Picture4, Picture5, Picture6]}
      />
      <ProjectsCarousel />
    </div>
  );
}
