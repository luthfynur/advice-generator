import { ReactComponent as DividerDesktop } from './pattern-divider-desktop.svg';
import { ReactComponent as DividerMobile } from './pattern-divider-mobile.svg';

export default function Divider() {
  return (
    <div>
      <div className="justify-center items-center m-8 hidden sm:flex">
        <DividerDesktop />
      </div>
      <div className="justify-center items-center mt-8 mb-8 flex sm:hidden">
        <DividerMobile />
      </div>
    </div>
  );
}
