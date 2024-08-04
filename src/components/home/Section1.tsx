import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import ShootingStarEffect from "@/components/common/ShootingStar";
import TalkButton from "./components/TalkButton";
import ResumeButton from "./components/ResumeButton";
import socialLinks from "@/data/socialLinks";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      <ShootingStarEffect />

      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="justify-items-stretch !gap-16 lg:!gap-8">
          <Column classNames="justify-center max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Column classNames="max-w-full">
              <p className="text-base/6 drop_in">Hi 👋 I&apos;m</p>

              <p className="text-4xl/normal md:text-5xl/normal font-bold text-[var(--primaryColor)] drop_in">
                Mizuno Rintarou
              </p>

              <p className="text-sm/6 font-medium text-[var(--textColorLight)] drop_in">
                Game & Full Stack Developer
              </p>

              <p className="text-base/normal mt-8 drop_in">
                <Balancer>
                  Welcome to my portfolio!
                  <br />Passionate professional with 5+ years of experience and knowledge of Blockchain Engineering
                  and Fullstack Development. Capable of excelling as part of a team or individually in a
                  fast-paced environment. Specialize in Solidity, Smart Contracts, ether.js, web3.js, and familiar
                  with several blockchain networks like Ethereum, Binance, Tron, Polkadot, Tezos, etc. Handled
                  all types of programming languages including Python/Django/Flask and React/Next,
                  Node.js/Express, worked with Git/Github, developed server-side and front-end software, and
                  offered issue tracking and customer support.
                </Balancer>
              </p>

              <Column classNames="gap-4 mt-8 lg:mt-16 lg:flex-row">
                <TalkButton />
                <ResumeButton />
              </Column>
            </Column>

            <Column classNames="mt-8 lg:mt-16 drop_out">
              <p className="text-base/6 font-semibold">Follow me here</p>

              <Row classNames="mt-2 gap-2">
                {socialLinks.slice(0, 5).map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                      aria-label={`${link.name}`}
                    >
                      <span className="text-base/6 text-[var(--whiteColor)]">
                        <FontAwesomeIcon icon={link.icon} />
                      </span>
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <Row classNames="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] pointer-events-none justify-self-center sm:justify-self-end items-center justify-center rounded-full bg-transparent border-2 border-[var(--primaryColor60)] aspect-sqaure overflow-hidden my-auto drop_out">
            <Row classNames="w-full h-auto items-center justify-center rounded-full bg-transparent border-[0.8rem] border-[var(--primaryColor30)] aspect-sqaure overflow-hidden pointer-events-none">
              <Image
                src="/images/profile.png"
                alt="profile"
                width={400}
                height={400}
                sizes="100%"
                priority
                placeholder="blur"
                blurDataURL="/images/profile.png"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1 / 1",
                }}
              />
            </Row>
          </Row>
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
