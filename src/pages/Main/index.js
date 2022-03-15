import Footer from '../../components/Footer';
import Divider from '../../components/Divider';
import DiceIcon from '../../components/DiceIcon';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Main() {
  const [advice, setAdvice] = useState({});

  function getAdvice() {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((data) => {
        setAdvice({
          id: data.data.slip.id,
          advice: data.data.slip.advice,
        });
        console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div class="animate-pulse flex h-screen flex-col justify-center items-center bg-[#1f2632]">
      <div class="relative rounded-xl bg-[#323a49] mt-auto mb-auto p-4 w-[320px] sm:w-[550px] sm:p-6">
        <p class="font-manrope text-[14px] text-[#52ffa8] text-center tracking-[4px] p-8">
          ADVICE {advice.id}
        </p>
        <p class="font-manrope text-[28px] text-[#cee3e9] text-center">
          "{advice.advice}"
        </p>
        <Divider />
        <div
          class="absolute -bottom-[20px] sm:left-[253px] left-[140px]"
          onClick={getAdvice}
        >
          <div class="bg-[#52ffa8] w-[50px] h-[50px] rounded-full p-[12.48px] hover:shadow-[-0.2px_2px_10px_10px_rgba(82,255,168,0.4)]">
            <DiceIcon />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
