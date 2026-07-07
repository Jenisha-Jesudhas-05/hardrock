// Footer/FooterOfferBlock.tsx
import SButton from '@components/SButton/SButton';
import SText from '@components/SText/SText';
import { FooterBet, FooterGames } from '@components/SLogo';
import Unity from '@components/SIcons/Icons/unity';
import appStore from '../../../public/appStore.svg';
import googlePlay from '../../../public/googlePlay.svg';

const FooterOfferBlock = () => {
  return (
    <div className="flex flex-col">
      <SText variant="bodyMd" classStyles="text-white leading-normal whitespace-nowrap">
        Receive Special Member Offers
      </SText>

      <SButton variant="gold" size="lg" classStyles="text-sm leading-loose mt-6 w-fit">
        <Unity className="mr-2" />
        Sign In or Join Now
      </SButton>

      <SText variant="bodyMd" classStyles="mt-10 text-white leading-normal whitespace-nowrap">
        Save & Earn With Our App
      </SText>
      <div className="mt-4 flex items-center gap-3">
        <img src={appStore} alt="Download on the App Store" className="h-10" />
        <img src={googlePlay} alt="Get it on Google Play" className="h-10" />
      </div>

      <SText variant="bodyMd" classStyles="mt-10 text-white leading-normal whitespace-nowrap">
        Online Sportsbook & Gaming
      </SText>

      <div className="mt-7 flex items-center gap-4">
        <FooterGames className="mb-4" />
        <FooterBet />
      </div>
    </div>
  );
};

export default FooterOfferBlock;
