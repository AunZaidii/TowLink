import { Outlet } from 'react-router';
import { DevNavigation } from './DevNavigation';

export function RootLayout() {
  return (
    <>
      <Outlet />
      <DevNavigation />
    </>
  );
}
