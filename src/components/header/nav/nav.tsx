import NavLinks from '@/components/header/nav/NavLinks';

export default function Nav() {
  const links = [
    {
      title: '.home( )',
      href: '/'
    },
    {
      title: '.about( )',
      href: '/about'
    },
    {
      title: '.projects( )',
      href: '/projects'
    },
    {
      title: '.gallery( )',
      href: '/gallery'
    },
    {
      title: '.blog( )',
      href: '/blog'
    },
    {
      title: '.contact( )',
      href: '/contact'
    }
  ];

  return (
    <div className="box-border flex h-full flex-col justify-between p-[100px_40px_50px]">
      <NavLinks links={links} />
    </div>
  );
}
