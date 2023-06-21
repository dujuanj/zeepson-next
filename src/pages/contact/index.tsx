import { useEffect, useState } from 'react'
import Header from 'components/header';
import Image from 'next/legacy/image'
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '@/styles/Home.module.css';
import curStyle from './contact.module.scss'
import { Section, SectionLeft, SectionRight, SectionBottom } from 'components/framer';

import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  useTranslation,
} from "next-export-i18n";
import { relative } from 'path';


export default function Home() {
  const { t } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    setHydrated(true);
  }, [isInView]);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }


  return (
    <>
      <div>

        <Head>
          <title>碳通科技</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div>
          <div className={curStyle.part1}>
            <Image src='/images/about.png'
              width={1440}
              height={410} layout='responsive'
            ></Image>
            <Section>
              <p className={curStyle.h1}>{t('about.text')}</p>
            </Section>

          </div>
          <Container className={curStyle.top}>
            <Row>
              <Col md={7} ref={ref} >
                <SectionLeft><div className={curStyle.text}>
                  <h1>{t('about.title')}</h1>
                  <p>{t('about.content_1')}</p>
                  <p>{t('about.content_2')}</p>
                </div></SectionLeft>


              </Col>
              <Col md={5} className={curStyle.right_img}>
                <SectionRight>
                  <Image src='/images/about_1.png'
                    width={488}
                    height={660} layout='responsive'
                  ></Image>
                </SectionRight>

              </Col>
            </Row>
            <Row>  <SectionBottom>
              <Col style={{ position: 'relative' }}>

                <div className={curStyle.p_ul}>
                  <Container>
                    <Row>
                      <Col xs={4} md className={curStyle.col}>
                        <div>
                          <img src="/images/about_10.png" alt="" />
                          <p>{t('about.txt1')}</p>
                        </div>
                      </Col>
                      <Col xs={4} md className={curStyle.col}>
                        <div>
                          <img src="/images/about_30.png" alt="" />
                          <p>{t('about.txt2')}</p>
                        </div></Col>
                      <Col xs={4} md className={curStyle.col}>
                        <div>
                          <img src="/images/about_ai.png" alt="" className={curStyle.small} />
                          <p>{t('about.txt3')}</p>
                        </div>
                      </Col>
                      <Col xs={4} md className={curStyle.col}>
                        <div>
                          <img src="/images/about_chain.png" alt="" className={curStyle.small} />
                          <p>{t('about.txt4')}</p>
                        </div>
                      </Col>
                      <Col xs={4} md className={curStyle.col}>
                        <div style={{ borderRight: 'none' }}>
                          <img src="/images/about_iot.png" alt="" className={curStyle.small} />
                          <p>{t('about.txt5')}</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col></SectionBottom>
            </Row>
          </Container>
        </div>
      </div >
    </>
  );
}

