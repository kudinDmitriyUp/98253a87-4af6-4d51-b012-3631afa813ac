"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Heart, ShoppingBag, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="STREETWEAR CO"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "Collections", id: "collections" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "View Cart",
            href: "#"
          }}
          className="bg-background border border-accent rounded-none"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Authentic Streetwear for the Bold"
          description="Discover exclusive urban apparel curated for the streets. Premium quality, uncompromising style."
          tag="New Collection"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062200196-0ym0xerm.jpg"
          imageAlt="Urban streetwear model in bold fashion"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Explore", href: "collections" }
          ]}
          containerClassName="relative w-full min-h-screen"
          titleClassName="text-5xl md:text-7xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-2xl font-light max-w-2xl"
          buttonClassName="px-8 py-4 font-semibold uppercase tracking-wide text-sm"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Collection"
          description="Hand-picked urban essentials that define your style"
          tag="Best Sellers"
          products={[
            {
              id: "1",
              brand: "STREETWEAR CO",
              name: "Essential Hoodie",
              price: "$89.00",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062201221-ilg53zfi.jpg",
              imageAlt: "Black essential hoodie"
            },
            {
              id: "2",
              brand: "STREETWEAR CO",
              name: "Graphic T-Shirt",
              price: "$45.00",
              rating: 4,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062201900-iesrhsas.jpg",
              imageAlt: "Oversized graphic t-shirt"
            },
            {
              id: "3",
              brand: "STREETWEAR CO",
              name: "Cargo Pants",
              price: "$119.00",
              rating: 5,
              reviewCount: "3.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062202558-9b4ah2ln.jpg",
              imageAlt: "Urban cargo pants"
            },
            {
              id: "4",
              brand: "STREETWEAR CO",
              name: "Classic Sneakers",
              price: "$135.00",
              rating: 5,
              reviewCount: "4.2k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062203224-s04vaqnm.jpg",
              imageAlt: "White classic sneakers"
            },
            {
              id: "5",
              brand: "STREETWEAR CO",
              name: "Baseball Cap",
              price: "$35.00",
              rating: 4,
              reviewCount: "920",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062203970-lrpq318q.jpg",
              imageAlt: "Urban baseball cap"
            }
          ]}
          textboxLayout="split"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          containerClassName="w-full py-20"
          textBoxTitleClassName="text-5xl font-bold uppercase tracking-tight"
          textBoxDescriptionClassName="text-lg font-light"
          cardClassName="group relative overflow-hidden border border-accent rounded-none hover:shadow-2xl transition-all duration-300"
          imageClassName="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="Urban Style Redefined"
          description={[
            "Since 2018, we have been committed to delivering authentic streetwear that resonates with urban culture. Our collections blend quality craftsmanship with bold aesthetics, creating pieces that make a statement. Every design tells a story of the streets."
          ]}
          metrics={[
            { label: "Pieces Sold Globally", value: "500K+" },
            { label: "Community Members", value: "150K+" }
          ]}
          showBorder={true}
          containerClassName="py-20 border-t border-accent"
          titleClassName="text-6xl font-bold uppercase tracking-tighter"
          descriptionClassName="text-xl font-light leading-relaxed"
          metricValueClassName="text-7xl font-bold"
          metricLabelClassName="text-lg font-light uppercase"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Impact By Numbers"
          description="Proving our commitment to urban fashion excellence"
          tag="Performance"
          metrics={[
            { id: "1", icon: ShoppingBag, title: "Collections", value: "24" },
            { id: "2", icon: Zap, title: "Sold Out Items", value: "89%" },
            { id: "3", icon: Heart, title: "Customer Love", value: "9.8/10" },
            { id: "4", icon: TrendingUp, title: "Growth YoY", value: "245%" }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="four-items-2x2-equal-grid"
          containerClassName="py-20 border-t border-accent"
          textBoxTitleClassName="text-5xl font-bold uppercase tracking-tight mb-2"
          textBoxDescriptionClassName="text-lg font-light mb-12"
          cardClassName="bg-card border border-accent rounded-none p-8 text-center hover:shadow-xl transition-shadow"
          valueClassName="text-6xl font-bold uppercase"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Loved By Our Community"
          description="Real voices from the streetwear revolution"
          tag="Customer Stories"
          testimonials={[
            {
              id: "1",
              name: "Marcus D.",
              role: "Streetwear Collector",
              company: "Urban Fashion",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062204646-l3wtjs2b.jpg",
              imageAlt: "Marcus D. portrait"
            },
            {
              id: "2",
              name: "Alex J.",
              role: "Fashion Blogger",
              company: "Style Insider",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062205393-f798u8di.jpg",
              imageAlt: "Alex J. portrait"
            },
            {
              id: "3",
              name: "Jordan T.",
              role: "Influencer",
              company: "Urban Culture",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062206123-tskg57r1.jpg",
              imageAlt: "Jordan T. portrait"
            },
            {
              id: "4",
              name: "Casey M.",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062206832-ihzrtjbi.jpg",
              imageAlt: "Casey M. portrait"
            },
            {
              id: "5",
              name: "Riley K.",
              role: "Fashion Enthusiast",
              company: "Street Trends",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062207795-6z4ys0pz.jpg",
              imageAlt: "Riley K. portrait"
            },
            {
              id: "6",
              name: "Taylor R.",
              role: "Style Curator",
              company: "Fashion Forward",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062208414-th5reqym.jpg",
              imageAlt: "Taylor R. portrait"
            }
          ]}
          textboxLayout="default"
          animationType="opacity"
          gridVariant="three-columns-all-equal-width"
          containerClassName="py-20 border-t border-accent"
          textBoxTitleClassName="text-5xl font-bold uppercase tracking-tight"
          textBoxDescriptionClassName="text-lg font-light mb-12"
          cardClassName="relative h-100 overflow-hidden rounded-none border border-accent hover:shadow-2xl transition-shadow"
          imageClassName="w-full h-full object-cover"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted Brand Partnerships"
          description="Collaborating with global streetwear leaders"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062209966-wofe8fs9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062210700-8wua5svb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062211446-5wb9s40q.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062211916-7utmb85a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062212459-fqmqkost.jpg"
          ]}
          textboxLayout="default"
          containerClassName="py-20 border-t border-accent bg-card rounded-none"
          textBoxTitleClassName="text-4xl font-bold uppercase tracking-tight"
          textBoxDescriptionClassName="text-lg font-light mb-12"
          logoCardClassName="bg-background border border-accent rounded-none p-4 flex items-center justify-center h-24"
          logoImageClassName="h-8 w-auto object-contain"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about our collections and service"
          tag="Support"
          faqs={[
            {
              id: "1",
              title: "What is your sizing guide?",
              content: "We provide detailed size charts for each product. All items are true to size. If you're between sizes, we recommend sizing up for comfort. Check individual product pages for specific measurements."
            },
            {
              id: "2",
              title: "What are your shipping times?",
              content: "Standard shipping takes 5-7 business days. Express shipping available (2-3 days). International orders ship within 10-14 business days. Track your order in real-time from our dashboard."
            },
            {
              id: "3",
              title: "Do you offer returns?",
              content: "Yes, 30-day returns on all items in original condition. Free return shipping on orders over $100. Exchange available for different sizes or colors within 15 days."
            },
            {
              id: "4",
              title: "Are your items authentic?",
              content: "All products are 100% authentic and sourced directly. We partner with verified manufacturers and provide authenticity guarantees on all limited edition pieces."
            },
            {
              id: "5",
              title: "Do you have a loyalty program?",
              content: "Join our VIP community to earn points on every purchase, get early access to drops, and exclusive discounts. Members earn 1 point per dollar spent, redeemable for store credit."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764062209235-a3764sw4.jpg"
          imageAlt="Modern retail store interior"
          mediaPosition="left"
          textboxLayout="default"
          animationType="smooth"
          containerClassName="py-20 border-t border-accent"
          textBoxTitleClassName="text-5xl font-bold uppercase tracking-tight"
          textBoxDescriptionClassName="text-lg font-light mb-12"
          accordionClassName="border-b border-accent last:border-b-0"
          accordionTitleClassName="text-xl font-semibold py-4 uppercase"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated With New Drops"
          description="Get first access to exclusive releases, special offers, and insider updates from the streets."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We'll send you updates about new collections. Unsubscribe anytime."
          containerClassName="py-20 border-t border-accent"
          contentClassName="max-w-2xl mx-auto text-center bg-card border border-accent rounded-none p-12"
          titleClassName="text-5xl font-bold uppercase tracking-tight mb-4"
          descriptionClassName="text-lg font-light mb-8"
          formClassName="space-y-4"
          inputClassName="w-full px-4 py-3 border border-accent rounded-none bg-background text-foreground placeholder-accent focus:outline-none focus:ring-2 focus:ring-primary-cta"
          buttonClassName="w-full px-6 py-3 bg-primary-cta text-background font-bold uppercase tracking-wide rounded-none hover:shadow-lg transition-all"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Shop",
              items: [
                { label: "New Arrivals", href: "#" },
                { label: "Best Sellers", href: "#" },
                { label: "Collections", href: "#" },
                { label: "Sale", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Return Policy", href: "#" },
                { label: "Shipping Info", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Streetwear Co. All rights reserved."
          containerClassName="bg-background border-t border-accent"
          footerContainerClassName="max-w-6xl mx-auto px-4 py-12"
          columnTitleClassName="text-lg font-bold uppercase tracking-wide mb-4"
          columnItemClassName="text-sm font-light hover:text-primary-cta transition-colors"
        />
      </div>
    </ThemeProvider>
  );
}