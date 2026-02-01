export type DesktopItem = {
  id: string;
  kind: 'file' | 'folder';
  title: string;
  link: string | null;
  position: { top: number; left: number };
};

export type NotificationItem = {
  title: string;
  message: string;
};

export const DESKTOP_ITEMS: DesktopItem[] = [
  {
    id: 'fleetune-platform',
    kind: 'file',
    title: 'Fleetune_Platform',
    link: '/portfolio/Fleetune-b874bacdf7244bcebe8c15ecceca96fe?pvs=4',
    position: { top: 80, left: 40 },
  },
  {
    id: 'fleetune-planning',
    kind: 'file',
    title: 'Fleetune_Planning',
    link: '/portfolio/Fleetune-Platform_Fleetune-efdab541202d430aa17ed801c11e173d?pvs=4',
    position: { top: 230, left: 90 },
  },
  {
    id: 'resume',
    kind: 'file',
    title: 'Resume',
    link: '/documents/2f42fcf35afb80d8b7cfd5e4033d2ecb',
    position: { top: 30, left: 340 },
  },
  {
    id: 'rental-oppa',
    kind: 'file',
    title: 'Rental Oppa',
    link: '/documents/Rental-Oppa-2fa2fcf35afb801f8030c5d3e6bdfec8',
    position: { top: 430, left: 220 },
  },
  {
    id: 'musubi',
    kind: 'file',
    title: 'MVL_Musubi',
    link: '/documents/Musubi_MVL-easi6-2fa2fcf35afb80898783dc0ba5627809',
    position: { top: 410, left: 60 },
  },
  {
    id: 'fleetune-dat',
    kind: 'file',
    title: 'Fleetune_DAT',
    link: '/portfolio/DAT_Fleetune-fcb2534eaea2470bbb4a98493ba3ecf0?pvs=4',
    position: { top: 580, left: 180 },
  },
  {
    id: 'fleetune-drt-shuttle',
    kind: 'file',
    title: 'Fleetune_DRT Shuttle',
    link: '/portfolio/DRT-Shuttle_Fleetune-0159d62505344ec48ad557f8fc5e3a24?pvs=4',
    position: { top: 640, left: 60 },
  },
  {
    id: 'toy-project',
    kind: 'file',
    title: 'Toy Project',
    link: '/portfolio/Toy-projects-7c5c721f49bc44b3b652012e76c2deb5?pvs=4',
    position: { top: 120, left: 220 },
  },
  {
    id: 'click-here-folder',
    kind: 'folder',
    title: 'Click Here!',
    link: null,
    position: { top: 300, left: 240 },
  },
];

export const NOTIFICATIONS: NotificationItem[] = [
  {
    title: '알림',
    message: 'Nice to meet you, Stranger',
  },
  {
    title: '중요 알림',
    message: 'You can drag and move something',
  },
];
