import Footer from '../../components/Footer';
import Divider from '../../components/Divider';
import DiceIcon from '../../components/DiceIcon';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Main() {
  const [advice, setAdvice] = useState({});
  const [refresh, setRefresh] = useState(true);

  function getAdvice() {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((data) => {
        setAdvice({
          id: data.data.slip.id,
          advice: data.data.slip.advice,
        });
        setRefresh(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getNewAdvice() {
    setRefresh(true);
    setTimeout(() => {
      getAdvice();
    }, 1000);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center items-center bg-[#1f2632]">
      <div
        className={`${
          refresh === true ? 'animate-pulse' : ''
        } relative rounded-xl bg-[#323a49] mt-auto mb-auto p-4 w-[320px] sm:w-[550px] sm:p-6`}
      >
        <p className="font-manrope text-[14px] text-[#52ffa8] text-center tracking-[4px] p-8">
          ADVICE #{advice.id}
        </p>
        <p className="font-manrope text-[28px] text-[#cee3e9] text-center">
          "{advice.advice}"
        </p>
        <Divider />
        <div
          className="absolute -bottom-[20px] sm:left-[253px] left-[140px]"
          onClick={getNewAdvice}
        >
          <div className="bg-[#52ffa8] w-[50px] h-[50px] rounded-full p-[12.48px] hover:shadow-[-0.2px_2px_10px_10px_rgba(82,255,168,0.4)]">
            <DiceIcon />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
