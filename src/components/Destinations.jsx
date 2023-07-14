import React from 'react'
import PropsDestinations from './props/DestinationsProps'
import destinationfirstimg from "../assets/destination-one.png"
import destinationsecondimg from "../assets/destination-two.png"
import destinationthirdimg from "../assets/destination-three.png"
import destinationfourthimg from "../assets/destination-four.png"
import "../styles/destinations.scss"

function Destinations() {
    return (
        <div className='destionations commonpadding'>
            <div className="container">
                <div className="destionations-title">
                    <h2>Beyond travel destinations</h2>
                    <button className="global-btn">
                        View All Destination
                    </button>
                </div>
                <div className="all-destinations">
                    <div className="wrap-destination">
                    <PropsDestinations destinationsImage={destinationfirstimg} destinationsTitle="Bali, Indonesia" destinationsText="Experience the serenity of Ubud's lush landscapes, indulge in luxurious spa treatments, and immerse yourself in Balinese culture through traditional ceremonies and yoga retreats." />
                    </div>
                    <div className="wrap-destination">
                    <PropsDestinations destinationsImage={destinationsecondimg} destinationsTitle="Amalfi Coast, Italy" destinationsText="Discover the beauty of the Mediterranean coastline while indulging in exquisite Italian cuisine, exploring charming coastal villages, and rejuvenating with scenic hikes and rejuvenating spa treatments" />
                    </div>
                    <div className="wrap-destination">
                    <PropsDestinations destinationsImage={destinationthirdimg} destinationsTitle="Costa Rica" destinationsText="Immerse yourself in the tropical paradise of Costa Rica, where wellness retreats offer yoga, meditation, and eco-friendly adventures amidst stunning rainforests and pristine beaches." />
                    </div>
                    <div className="wrap-destination">
                    <PropsDestinations destinationsImage={destinationfourthimg} destinationsTitle="Kyoto, Japan" destinationsText="Delve into the tranquility of Kyoto's ancient temples and gardens, experience traditional tea ceremonies, and enjoy the art of Japanese cuisine as you explore the city's rich cultural heritage." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations