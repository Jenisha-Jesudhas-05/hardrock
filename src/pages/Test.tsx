import SButton from '../components/SButton/SButton';
import SText from '../components/SText/SText';
import Icon from '../components/SIcons/SIcon';

const Test = () => {
  return (
    <main>
      <div>
        <section>
          <SText variant="bodyLg">Find Your Next Stay</SText>

          <SText variant="bodySm" classStyles="text-[#646366] font-normal">
            Two towers, one destination.
          </SText>
        </section>

        <section>
          <SText variant="bodySm">3400 S Las Vegas Blvd, Las Vegas, NV 89109</SText>

          <SText variant="bodySm">info@hardrockvegas.com</SText>

          <SText variant="bodySm">+1 (866) 502-7529</SText>
        </section>

        <section>
          <SText variant="bodyMd">Meetings & Events</SText>

          <SText variant="bodyXs" classStyles="font-normal">
            Gather in iconic spaces, ideal for every occasion.
          </SText>

          <br />

          <SButton variant="primary">Explore Meetings & Events</SButton>
        </section>

        <section className="flex flex-col items-center justify-center text-center">
          <SText variant="bodyLg">Never Miss a Moment—Follow Us</SText>

          <SText variant="displaysm" classStyles="text-[#007AFF]">
            @hardrocklasvegas
          </SText>
        </section>

        <div className="flex gap-4 my-6">
          <Icon name="locationPin" />

          <Icon name="arrowRight" />
        </div>

        <div className="flex gap-4 my-6">
          <SButton variant="primary">Get Tickets</SButton>

          <SButton variant="outline">View Event</SButton>

          <SButton variant="ghost" size="sm">
            Skip
          </SButton>

          <SButton variant="gold">Join Today</SButton>
        </div>

        <section>
          <SText variant="displaymd">Stay Your Way in Las Vegas</SText>

          <SText variant="h2" classStyles="font-normal">
            Find the right room for your trip, from quick stays to signature suites across our
            towers.
          </SText>
        </section>
      </div>
    </main>
  );
};

export default Test;
