import { ReactComponent as DividerDesktop } from '../../assets/Images/pattern-divider-desktop.svg';
import { ReactComponent as DividerMobile } from '../../assets/Images/pattern-divider-mobile.svg';

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
