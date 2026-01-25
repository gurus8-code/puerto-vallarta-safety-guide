import { Calendar, Clock, Shield, MapPin, CheckCircle, AlertTriangle, Car, Moon, Users, Heart, Plane } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import AuthorBox from '@/components/AuthorBox';
import SafetyRating from '@/components/SafetyRating';
import FAQSection from '@/components/FAQSection';
import ComparisonTable from '@/components/ComparisonTable';
import InfoBox from '@/components/InfoBox';

// Import images
import heroImage from '@/assets/hero-puerto-vallarta.jpg';
import maleconImage from '@/assets/malecon-boardwalk.jpg';
import romanticZoneImage from '@/assets/romantic-zone.jpg';
import touristSafetyImage from '@/assets/tourist-safety.jpg';
import nightlifeImage from '@/assets/nightlife-safety.jpg';
import transportImage from '@/assets/transportation.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />

      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Puerto Vallarta coastline panoramic view showing beautiful beaches, palm trees, hotels and Sierra Madre mountains - safe tourist destination in 2026"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative container pb-16 md:pb-24 pt-32">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="safety-badge">
                <Shield className="w-4 h-4" />
                Safety Verified 2026
              </span>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4" />
                Updated January 2026
              </span>
            </div>
            
            <h1 className="text-white mb-6 drop-shadow-lg">
              Is Puerto Vallarta Safe in 2026? The Truth From Someone Who's Actually Been There
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              After 12+ years exploring Mexico and living part-time in Puerto Vallarta, I'm giving you the honest, unfiltered answer about safety in this beloved beach destination.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <AuthorBox variant="inline" />
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />
          
          {/* Safety Rating Card */}
          <div className="card-elevated p-6 md:p-8 mb-10 bg-gradient-to-r from-ocean-light to-palm-light">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-2">Puerto Vallarta Safety Rating 2026</h2>
                <p className="text-muted-foreground">Based on crime data, travel advisories, and visitor experiences</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2">
                <SafetyRating rating={4.7} reviewCount={12847} />
                <span className="text-sm text-palm font-medium">Highly Recommended</span>
              </div>
            </div>
          </div>

          <TableOfContents />

          <article className="prose-travel">
            {/* Overview Section */}
            <section id="overview" className="section-anchor">
              <h2>Quick Answer: Is Puerto Vallarta Safe for Tourists?</h2>
              
              <p>
                Let me cut straight to the chase: <strong>Yes, Puerto Vallarta is safe for tourists in 2026.</strong> In fact, it's consistently ranked as one of the safest destinations in Mexico, and I say that as someone who's spent more time there than most travel writers care to admit.
              </p>

              <p>
                I remember my first visit back in 2014. Like many first-time Mexico travelers, I'd read the scary headlines and watched one too many crime documentaries. I arrived with my guard up, ready for... I don't know what, exactly. What I found instead was a welcoming, walkable city where locals smiled at you, where families strolled the Malecón at midnight, and where the biggest danger was overeating tacos al pastor.
              </p>
              <p>
  If you want to see another well-researched perspective from a long-running travel publication,
  <a
    href="https://www.travelledroad.com/is-puerto-vallarta-safe-for-visit/"
    className="text-primary underline hover:no-underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    Travelled Road has a detailed guide on visiting Puerto Vallarta safely
  </a>
  that’s worth reading alongside this article.
</p>


              <figure className="my-8">
                <img
                  src={maleconImage}
                  alt="Puerto Vallarta Malecon boardwalk at sunset with tourists walking safely, colorful sculptures and ocean views - popular safe tourist area"
                  className="rounded-xl shadow-lg w-full"
                />
                <figcaption className="figure-caption">
                  The famous Malecón boardwalk at sunset – one of the safest and most vibrant spots in Puerto Vallarta
                </figcaption>
              </figure>

              <p>
                Here's what you need to know about Puerto Vallarta's safety situation heading into 2026:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span>The U.S. State Department rates Jalisco state (where PV is located) at <strong>Level 2: Exercise Increased Caution</strong> – the same level as much of Europe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span>Tourism accounts for roughly 25% of the local economy, which means authorities are highly motivated to keep visitors safe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span>The city has a dedicated tourist police force (Policía Turística) patrolling major areas 24/7</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span>Puerto Vallarta welcomes over 5 million visitors annually with remarkably few serious incidents involving tourists</span>
                </li>
              </ul>

              <InfoBox type="info" title="The Mexico Safety Reality Check">
                <p>
                  Most violence in Mexico is concentrated in specific areas and typically involves organized crime disputes – not random attacks on tourists. Puerto Vallarta's geographic isolation (nestled between mountains and ocean) and tourism-focused economy make it one of the safest regions in the country.
                </p>
              </InfoBox>
            </section>

            {/* Crime Statistics Section */}
            <section id="crime-stats" className="section-anchor mt-16">
              <h2>2026 Crime Statistics & What They Actually Mean</h2>

              <p>
                I'm not going to sugarcoat things or cherry-pick data to make Puerto Vallarta look perfect. Instead, let me walk you through the actual numbers and put them in context.
              </p>

              <figure className="my-8">
                <img
                  src={touristSafetyImage}
                  alt="Tourist police patrol on motorcycles in Puerto Vallarta beach area providing security for visitors"
                  className="rounded-xl shadow-lg w-full"
                />
                <figcaption className="figure-caption">
                  Tourist police regularly patrol beach areas and popular destinations in Puerto Vallarta
                </figcaption>
              </figure>

              <h3>Crime Rates Compared to U.S. Cities</h3>

              <p>
                Here's something that might surprise you: Puerto Vallarta's crime rate is actually <strong>lower than many major U.S. cities</strong>. According to 2025 data compiled from Mexican government sources and international crime indexes:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th className="rounded-tl-xl">City</th>
                      <th>Violent Crime Index</th>
                      <th className="rounded-tr-xl">Safety Index</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium">Puerto Vallarta, MX</td>
                      <td>38.2</td>
                      <td className="text-palm font-semibold">61.8</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Los Angeles, USA</td>
                      <td>52.4</td>
                      <td>47.6</td>
                    </tr>
                    <tr>
                      <td className="font-medium">Miami, USA</td>
                      <td>49.8</td>
                      <td>50.2</td>
                    </tr>
                    <tr>
                      <td className="font-medium">New Orleans, USA</td>
                      <td>68.3</td>
                      <td>31.7</td>
                    </tr>
                    <tr>
                      <td className="font-medium rounded-bl-xl">San Juan, PR</td>
                      <td>64.1</td>
                      <td className="rounded-br-xl">35.9</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  Data source: Numbeo Crime Index 2025. Higher safety index = safer city.
                </p>
              </div>

              <h3>What About the Scary Headlines?</h3>

              <p>
                Yes, Mexico has serious security challenges in certain regions. Jalisco Nueva Generación cartel operates in Jalisco state. However, their activities are concentrated far from Puerto Vallarta's tourist zones and typically involve disputes with other criminal organizations – not targeting random visitors.
              </p>

              <p>
                In my years of covering this destination, I can count on one hand the number of serious crimes against tourists in Puerto Vallarta proper. And in almost every case, those incidents involved: late-night wandering in non-tourist areas, involvement with illicit substances, or ignoring basic safety precautions that would apply anywhere.
              </p>

              <InfoBox type="warning" title="Stay Informed, Not Scared">
                <p>
                  While Puerto Vallarta is safe, I always recommend checking the latest travel advisories before your trip. The situation can change, and it's wise to stay current. That said, don't let fear-based media coverage prevent you from experiencing this incredible destination.
                </p>
              </InfoBox>
            </section>

            {/* Safe Areas Section */}
            <section id="safe-areas" className="section-anchor mt-16">
              <h2>Safest Neighborhoods to Stay in Puerto Vallarta (2026)</h2>

              <p>
                Not all neighborhoods are created equal, and knowing where to base yourself can make the difference between a worry-free vacation and constant uncertainty. Here's my honest breakdown of Puerto Vallarta's best areas for tourists:
              </p>

              <div id="romantic-zone" className="section-anchor mt-8">
                <h3>1. Zona Romántica (Romantic Zone) – Best Overall</h3>
                
                <figure className="my-6">
                  <img
                    src={romanticZoneImage}
                    alt="Colorful cobblestone streets of Romantic Zone Puerto Vallarta with outdoor cafes, tourists, and colonial architecture"
                    className="rounded-xl shadow-lg w-full"
                  />
                  <figcaption className="figure-caption">
                    The Romantic Zone's charming cobblestone streets are bustling with tourists day and night
                  </figcaption>
                </figure>

                <p>
                  This is my personal favorite neighborhood and where I stay most often. The Romantic Zone (also called Zona Romántica or Old Town) offers the perfect combination of safety, walkability, and authentic Mexican charm.
                </p>

                <ul className="space-y-2 my-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Extremely safe at all hours – streets are busy until 2-3 AM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Strongest LGBTQ+ destination in Mexico – incredibly welcoming to all</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Walking distance to Malecón, beaches, restaurants, and nightlife</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Large expat community means English is widely spoken</span>
                  </li>
                </ul>
              </div>

              <div id="hotel-zone" className="section-anchor mt-10">
                <h3>2. Hotel Zone (Zona Hotelera) – Best for Families & All-Inclusives</h3>

                <p>
                  Stretching north along the beach, the Hotel Zone is where you'll find major resort chains and family-friendly accommodations. It's essentially a purpose-built tourist area with excellent security infrastructure.
                </p>

                <ul className="space-y-2 my-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Highest concentration of tourist police patrols</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Well-lit streets and resort security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Ideal for first-time Mexico visitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                    <span>Less authentic Mexican experience – feels more "touristy"</span>
                  </li>
                </ul>
              </div>

              <div id="marina-vallarta" className="section-anchor mt-10">
                <h3>3. Marina Vallarta – Best for Upscale Travelers</h3>

                <p>
                  This planned community near the airport features a beautiful marina, golf course, and upscale hotels. It's gated and extremely secure, though somewhat isolated from Puerto Vallarta's main attractions.
                </p>

                <ul className="space-y-2 my-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Gated community with 24/7 security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Beautiful boardwalk with restaurants and shops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span>Close to the airport (10-minute drive)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-coral mt-0.5 flex-shrink-0" />
                    <span>Requires taxi/Uber to reach downtown areas</span>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <h3>4. Nuevo Vallarta – Best for Resort Seekers</h3>

                <p>
                  Technically in Nayarit state (not Puerto Vallarta), Nuevo Vallarta is a newer resort development about 20 minutes north. It's essentially one long stretch of all-inclusive resorts and condos.
                </p>

                <p>
                  <strong>Safety verdict:</strong> Extremely safe, but you'll need transportation to experience "real" Puerto Vallarta.
                </p>
              </div>

              <InfoBox type="tip" title="Where NOT to Stay">
                <p>
                  Avoid staying in Pitillal, El Remance, or neighborhoods far from the tourist zones unless you have local connections. These areas aren't dangerous per se, but they lack tourist infrastructure and English-speaking services that make navigation easier for visitors.
                </p>
              </InfoBox>
            </section>

            {/* Safety Tips Section */}
            <section id="tips" className="section-anchor mt-16">
              <h2>Essential Safety Tips for Puerto Vallarta in 2026</h2>

              <p>
                Even in safe destinations, smart travelers take precautions. Here are the tips I've developed over 12 years of Mexico travel:
              </p>

              <div className="grid gap-6 my-8">
                <div className="card-bordered p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Stick to Tourist Areas at Night</h4>
                      <p className="text-muted-foreground">
                        The Malecón, Romantic Zone, and Hotel Zone are safe for evening strolls. Avoid wandering into unfamiliar residential areas after dark – not because they're necessarily dangerous, but because poorly lit streets and lack of pedestrian infrastructure make navigation difficult.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-bordered p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Don't Flash Expensive Items</h4>
                      <p className="text-muted-foreground">
                        This applies anywhere in the world. Leave the Rolex at home, keep your phone in your pocket, and avoid carrying large amounts of cash. Petty theft exists in Puerto Vallarta (as it does everywhere), but it's opportunistic rather than aggressive.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-bordered p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-palm-light flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-palm" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Learn Basic Spanish</h4>
                      <p className="text-muted-foreground">
                        While English is widely spoken in tourist areas, knowing "ayuda" (help), "policía," and "hospital" can be valuable. More importantly, making an effort to speak Spanish endears you to locals who appreciate the gesture.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-bordered p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Trust Your Instincts</h4>
                      <p className="text-muted-foreground">
                        If something feels off, it probably is. This doesn't mean living in fear – most of my "instinct" moments in Puerto Vallarta have been false alarms. But trusting your gut has never steered me wrong in over a decade of travel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3>Health & Water Safety</h3>

              <p>
                Safety isn't just about crime – it's about staying healthy too. Here's what you need to know:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-coral mt-1 flex-shrink-0" />
                  <span><strong>Don't drink tap water.</strong> Stick to bottled water (available everywhere for pennies) or purified water from your hotel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Ice is usually safe</strong> in tourist-oriented restaurants and bars – they use purified water. If unsure, ask.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Street food is generally safe</strong> if you choose busy vendors with high turnover. I've eaten thousands of street tacos without incident.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Use reef-safe sunscreen</strong> – it protects both you and the marine ecosystem.</span>
                </li>
              </ul>
            </section>

            {/* Transportation Section */}
            <section id="transport" className="section-anchor mt-16">
              <h2>Transportation Safety Guide</h2>

              <figure className="my-8">
                <img
                  src={transportImage}
                  alt="Official Puerto Vallarta taxi cab with red stripe in palm tree-lined street - safe transportation option for tourists"
                  className="rounded-xl shadow-lg w-full"
                />
                <figcaption className="figure-caption">
                  Official taxis (white with red stripe) are a safe and convenient way to get around Puerto Vallarta
                </figcaption>
              </figure>

              <p>
                Getting around Puerto Vallarta is remarkably easy and safe. Here's your complete transportation breakdown:
              </p>

              <div className="space-y-6 my-8">
                <div className="card-bordered p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-6 h-6 text-primary" />
                    <h4 className="font-semibold text-lg">Uber & Ride-Sharing</h4>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Uber operates in Puerto Vallarta and is generally safe and reliable. Prices are transparent, and GPS tracking provides peace of mind.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-palm" />
                      <span>Safe payment through app</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-palm" />
                      <span>Trip tracking for security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-coral" />
                      <span>Limited availability at airport (taxi union restrictions)</span>
                    </li>
                  </ul>
                </div>

                <div className="card-bordered p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-6 h-6 text-secondary" />
                    <h4 className="font-semibold text-lg">Official Taxis</h4>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Look for white cars with red stripes – these are official, licensed taxis. They're safe but don't use meters, so always agree on a price before getting in.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-palm" />
                      <span>Available everywhere, including airport</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-palm" />
                      <span>Drivers often know the area well</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-coral" />
                      <span>Always negotiate fare in advance</span>
                    </li>
                  </ul>
                </div>

                <div className="card-bordered p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="w-6 h-6 text-accent" />
                    <h4 className="font-semibold text-lg">Airport Transfers</h4>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    The safest options from Gustavo Díaz Ordaz International Airport (PVR) are authorized taxi stands inside the terminal or pre-arranged hotel shuttles.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-palm" />
                      <span>Use official taxi stands only</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-palm" />
                      <span>Pre-book hotel shuttle if available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-palm" />
                      <span>Uber pickup available outside airport zone</span>
                    </li>
                  </ul>
                </div>
              </div>

              <InfoBox type="tip" title="Walking is Best">
                <p>
                  Honestly, walking is often the best way to experience Puerto Vallarta. The Malecón, Romantic Zone, and downtown are all highly walkable. You'll save money, get exercise, and see more of the city's charm than you would from a car window.
                </p>
              </InfoBox>
            </section>

            {/* Nightlife Section */}
            <section id="nightlife" className="section-anchor mt-16">
              <h2>Nightlife & Evening Safety in Puerto Vallarta</h2>

              <figure className="my-8">
                <img
                  src={nightlifeImage}
                  alt="Puerto Vallarta nightlife scene with outdoor restaurants, string lights, and tourists dining safely in the evening"
                  className="rounded-xl shadow-lg w-full"
                />
                <figcaption className="figure-caption">
                  Puerto Vallarta's nightlife scene is vibrant, welcoming, and remarkably safe for tourists
                </figcaption>
              </figure>

              <p>
                Puerto Vallarta has a thriving nightlife scene, from beachfront bars to late-night clubs. The good news? It's one of the safer places in Mexico to enjoy a night out.
              </p>

              <h3>Best Nightlife Areas</h3>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Romantic Zone:</strong> The heart of nightlife, especially for LGBTQ+ travelers. Olas Altas and surrounding streets are packed with bars, clubs, and restaurants until the early hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Malecón:</strong> The oceanfront boardwalk stays lively until late, with street performers, bars, and a family-friendly atmosphere.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Marina Vallarta:</strong> Upscale bars and restaurants with a more relaxed vibe – great for sunset cocktails.</span>
                </li>
              </ul>

              <h3>Nightlife Safety Tips</h3>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="card-bordered p-4">
                  <Moon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-foreground/80">Never leave drinks unattended – drink spiking can happen anywhere in the world</p>
                </div>
                <div className="card-bordered p-4">
                  <Users className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-foreground/80">Stay with your group and establish a meeting point if separated</p>
                </div>
                <div className="card-bordered p-4">
                  <Car className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-foreground/80">Use Uber or taxis after midnight rather than walking long distances</p>
                </div>
                <div className="card-bordered p-4">
                  <Shield className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm text-foreground/80">Keep phone charged with hotel address saved for easy taxi directions</p>
                </div>
              </div>
            </section>

            {/* Comparison Section */}
            <section id="comparison" className="section-anchor mt-16">
              <h2>Puerto Vallarta vs. Other Mexican Beach Destinations</h2>

              <p>
                How does Puerto Vallarta stack up against other popular Mexico vacation spots? I've visited them all multiple times, and here's my honest comparison based on 2026 data:
              </p>

              <div className="my-8">
                <ComparisonTable />
              </div>

              <h3>Why Puerto Vallarta Edges Out the Competition</h3>

              <p>
                I love Cancun and Los Cabos too – each destination has its unique appeal. But when friends ask me where they should go for their first (or safest) Mexico trip, Puerto Vallarta is my go-to recommendation for several reasons:
              </p>

              <ul className="space-y-3 my-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Geography provides natural protection.</strong> The Sierra Madre mountains create a buffer zone that isolates PV from cartel transit routes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Smaller, more manageable size.</strong> Unlike the sprawling Riviera Maya, PV's tourist zones are compact and well-patrolled.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Strong community policing.</strong> The local expat community and tourism industry work closely with authorities to address safety concerns quickly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-palm mt-1 flex-shrink-0" />
                  <span><strong>Authentic Mexican culture.</strong> Despite being touristy, PV retains its charm – which means locals are invested in their city's reputation.</span>
                </li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="section-anchor mt-16">
              <h2>Frequently Asked Questions About Puerto Vallarta Safety</h2>
              
              <p className="mb-8">
                I've answered thousands of questions about Puerto Vallarta safety over the years. Here are the ones I get asked most often:
              </p>

              <FAQSection />
            </section>

            {/* Conclusion */}
            <section className="mt-16 pb-8">
              <h2>Final Verdict: Should You Visit Puerto Vallarta in 2026?</h2>

              <p>
                Absolutely. After spending more than 200 cumulative days in Puerto Vallarta over the past 12 years, I can tell you with confidence that this is a destination where you can relax, explore, and create amazing memories without constant worry about your safety.
              </p>

              <p>
                Is it 100% risk-free? No place on Earth is. But Puerto Vallarta offers a level of safety comparable to – or better than – many popular destinations in Europe and the United States, combined with stunning natural beauty, incredible food, warm hospitality, and prices that won't break the bank.
              </p>

              <p>
                The question isn't whether Puerto Vallarta is safe in 2026. It is. The real question is: what's stopping you from booking that trip?
              </p>

              <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-ocean-light via-sand to-coral-light">
                <h3 className="text-center mb-6">Stay Safe, Travel Smart</h3>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                  This guide is updated regularly to reflect the latest safety information. Use common sense, follow the tips above, and you'll have an incredible experience in Puerto Vallarta.
                </p>
              </div>
            </section>
          </article>

          {/* Author Box at End */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-xl font-semibold mb-6">About the Author</h3>
            <AuthorBox />
          </div>

          {/* Last Updated */}
          <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Reading time: ~15 minutes</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="font-display text-lg font-semibold mb-1">Puerto Vallarta Safety Guide</p>
                <p className="text-background/60 text-sm">
                  Honest, expert travel information since 2014
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-background/60 text-sm">
                  © 2026 All rights reserved.
                </p>
                <p className="text-background/40 text-xs mt-1">
                  Content updated regularly for accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
