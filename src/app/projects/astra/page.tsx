import ProjectBody from '@/app/projects/project/body';
import ProjectHero from '@/app/projects/project/hero';

export default function AstraProject() {
  const introduction =
    'ASTRA is a compact arcade console themed with space.' +
    ' It is designed to create an engaging interaction between the user and the machine, ' +
    'triggering various mechanisms and providing a playful, joyful, whimsical, and devious ' +
    'experience. The concept that drove the design of ASTRA was to create a machine that gamifies' +
    ' space. The final design of ASTRA consists of the following components: A simple projector ' +
    'with an LCD screen and lens to magnify the image. A holographic glass where the image is projected' +
    ' to create a holographic effect. An ultrasonic sensor as a trigger. When a user is detected, a curtain' +
    ' is lifted by a servo motor and an LED strip is lit up, all connected by an Arduino UNO.';

  const description = 'Gamify space with ASTRA, a holographic arcade console';
  const myRole =
    'A circular hologram can be viewed in the center of the machine. The projection is created by a Raspberry Pi (Retropie) running a space arcade game. The user can then play the game with an Xbox controller connected to the Raspberry Pi remotely. After 2 minutes, the curtain closes (end of the game). ASTRA is encased in a two-story cylindrical black acrylic structure that can be opened and closed at the top by an iris linkage mechanism.';
  return (
    <div>
      <ProjectHero
        description={description}
        media={'/images/astra/gizmo.png'}
        isImage={true}
        title={'Astra'}
      />
      <ProjectBody
        introduction={introduction}
        myRole={myRole}
        paragraphs={[]}
        subtitle={'Holographic arcade'}
        video={'/images/astra/gizmo.png'}
      />
    </div>
  );
}
