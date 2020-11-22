import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home" >
            <Banner/>
            <div className="home__section">
                <Card
                  src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                  title="Online Experiences"
                  description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                  src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                  title="Unique stays"
                  description="Spaces that are more than just a place to sleep."
                />
                <Card
                  src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                  title="Entire homes"
                  description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://a0.muscache.com/im/pictures/bc77b255-24e2-4fa6-ad8f-fb0d0b4ba29e.jpg"
                    title="A home away from the home"
                    description="Add your trip dates to get the cancellation details for this stay."
                    price="$ 500/night"
                />
                <Card
                src="https://a0.muscache.com/im/pictures/127b7d26-eaff-4774-a230-627ace2354c0.jpg"
                title="Pvt Luxurious Studio Apt fully furnished with Wifi"
                description="Add your trip dates to get the cancellation details for this stay."
                price="$ 450/night"
                />
                <Card
                  src="https://a0.muscache.com/im/pictures/2329c864-5f12-4e73-a180-82594bc28472.jpg"
                  title="Camping Co - Xenon"
                  description="Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."
                  price="$ 250/night"
                />
            </div>
        </div>
    )
}

export default Home
