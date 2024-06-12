'use client';

import Description from '@/components/animations/smoothScroll/description';
import Intro from '@/components/animations/smoothScroll/intro';
import Body from '@/components/animations/smoothScroll/body';

export default function AstraProject() {
  const introduction = [
    'ASTRA is a compact arcade themed on space.',
    'It is designed to create an engaging interaction',
    'between the user and the machine.',
    'Providing a whimsical and devious experience. ',
    'A hologram displays the game.',
    'The projection is created by a Raspberry Pi',
    'running a space arcade game.'
  ];

  const components =
    'The final design of ASTRA consists of the following components: ' +
    'A projector with an LCD screen and lens to magnify the image. ' +
    'A holographic glass where the image is projected to create a holographic effect.' +
    'An ultrasonic sensor as to trigger user interactions.' +
    'When a user is detected, a curtain is lifted by a servo motor and an LED strip is lit up, all connected by an Arduino UNO.';

  const heroText = 'Gamify space with ASTRA, a holographic arcade console';

  const description =
    'The user can play the game with an Xbox controller connected to the Raspberry Pi remotely.\n\n' +
    ' After 2 minutes, the curtain closes (end of the game). ' +
    'ASTRA is encased in a two-story cylindrical black acrylic structure.' +
    'At the top it is enclosed by an iris linkage mechanism.';
  const body = [
    {
      title: 'Astra',
      src: 'astra/astra.png'
    },
    {
      title: 'Final prototype',
      src: 'astra/giz1.png'
    },
    {
      title: 'Iris linkage mechanism',
      src: 'astra/gizmo.png'
    }
  ];
  return (
    <div className="bg-foreground">
      <Intro
        images={['/images/astra/giz1.png', '/images/astra/gizmo.png']}
        title={'ASTRA'}
      />
      <Description phrases={introduction} />
      <Body body={body} text={components} description={description} />
    </div>
  );
}
