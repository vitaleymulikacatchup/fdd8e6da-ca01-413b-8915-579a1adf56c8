"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Bell, Building, Heart, Linkedin, Mail, MessageCircle, Sparkles, Star, UtensilsCrossed, Users, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Haven Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Beyond Expectations"
          description="Discover unparalleled elegance and world-class service at Grand Haven Hotel. Where every moment becomes a cherished memory."
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <FeatureCardOne
          title="Exquisite Accommodations"
          description="Each room and suite is thoughtfully designed with premium amenities, elegant furnishings, and breathtaking views."
          tag="Rooms & Suites"
          tagIcon={Building}
          features={[
            {
              title: "Deluxe Suite",
              description: "Spacious suite with separate living area, marble bathroom, and city skyline views. Perfect for business or leisure travelers.",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe suite with modern furnishings",
              button: {
                text: "View Details",
                href: "contact"
              }
            },
            {
              title: "Presidential Suite",
              description: "Our crown jewel featuring panoramic views, private terrace, butler service, and the finest luxury amenities.",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite bedroom",
              button: {
                text: "Reserve Now",
                href: "contact"
              }
            },
            {
              title: "Ocean View Room",
              description: "Wake up to stunning ocean vistas from your private balcony. Includes premium bedding and spa-inspired bathroom.",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel room with ocean view and balcony",
              button: {
                text: "Check Availability",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to enhance your stay and create unforgettable experiences."
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind with our full-service spa featuring therapeutic treatments and wellness programs.",
              icon: Heart,
              button: {
                text: "Book Treatment",
                href: "contact"
              }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our award-winning chefs using the finest local and international ingredients.",
              icon: UtensilsCrossed,
              button: {
                text: "Make Reservation",
                href: "contact"
              }
            },
            {
              title: "Infinity Pool & Lounge",
              description: "Relax by our stunning rooftop infinity pool with panoramic city views and premium poolside service.",
              icon: Waves,
              button: {
                text: "Pool Access",
                href: "contact"
              }
            },
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, tours, and special requests.",
              icon: Bell,
              button: {
                text: "Contact Concierge",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="A Legacy of Excellence"
          description={[
            "For over three decades, Grand Haven Hotel has set the standard for luxury hospitality, welcoming distinguished guests from around the world.",
            "Our commitment to exceptional service, attention to detail, and creating memorable experiences has earned us numerous awards and the loyalty of discerning travelers."
          ]}
          buttons={[
            {
              text: "Our History",
              href: "about"
            },
            {
              text: "Awards & Recognition",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Exceptional Team"
          description="Our dedicated professionals are committed to providing personalized service and ensuring every guest feels truly special."
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "General Manager",
              description: "With over 15 years in luxury hospitality, Sarah leads our team with passion and ensures every guest experience exceeds expectations.",
              imageSrc: "https://images.pexels.com/photos/6466493/pexels-photo-6466493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell, General Manager",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/sarah-mitchell"
                }
              ]
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Chief Concierge",
              description: "Michael's extensive knowledge of the city and impeccable attention to detail make him invaluable in creating unforgettable guest experiences.",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen, Chief Concierge",
              socialLinks: [
                {
                  icon: Mail,
                  url: "mailto:michael@grandhaven.com"
                }
              ]
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Executive Chef",
              description: "Elena brings culinary artistry to our restaurant with her innovative approach to fine dining and commitment to exceptional cuisine.",
              imageSrc: "https://images.pexels.com/photos/8715595/pexels-photo-8715595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elena Rodriguez, Executive Chef",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://instagram.com/chefelena"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Haven Hotel for their most important journeys."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Alexandra Thompson",
              role: "CEO, Global Ventures",
              testimonial: "Grand Haven Hotel exceeded every expectation. The service was impeccable, the accommodations luxurious, and the attention to detail extraordinary. This is hospitality at its finest.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alexandra Thompson portrait"
            },
            {
              id: "2",
              name: "James Richardson",
              role: "Travel Writer",
              testimonial: "In my 20 years of reviewing luxury hotels worldwide, Grand Haven stands out as truly exceptional. Every aspect of the experience was flawlessly executed with genuine care.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Richardson portrait"
            },
            {
              id: "3",
              name: "Isabella Martinez",
              role: "Art Director",
              testimonial: "The perfect blend of elegance and comfort. From the stunning design to the personalized service, every moment felt special. I can't wait to return.",
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Isabella Martinez portrait"
            },
            {
              id: "4",
              name: "David Park",
              role: "Investment Manager",
              testimonial: "Outstanding in every way. The staff anticipated my needs before I even knew them. This level of service is what sets Grand Haven apart from other luxury hotels.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Park portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Organizations"
          description="Corporate partners and luxury travel companies worldwide recommend Grand Haven Hotel for their most valued clients."
          tag="Partners"
          tagIcon={Award}
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Begin Your Luxury Experience"
          description="Contact our reservations team to book your stay or learn more about our exclusive packages and amenities. We're here to make your visit extraordinary."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your preferences or special requests...",
            rows: 4,
            required: false
          }}
          buttonText="Request Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Accommodations",
              items: [
                {
                  label: "Deluxe Suites",
                  href: "rooms"
                },
                {
                  label: "Presidential Suite",
                  href: "rooms"
                },
                {
                  label: "Ocean View Rooms",
                  href: "rooms"
                }
              ]
            },
            {
              title: "Amenities",
              items: [
                {
                  label: "Spa & Wellness",
                  href: "amenities"
                },
                {
                  label: "Fine Dining",
                  href: "amenities"
                },
                {
                  label: "Pool & Lounge",
                  href: "amenities"
                },
                {
                  label: "Concierge",
                  href: "amenities"
                }
              ]
            },
            {
              title: "Hotel",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Reviews",
                  href: "testimonials"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Haven Hotel"
        />
      </div>
    </ThemeProvider>
  );
}