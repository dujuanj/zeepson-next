import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import New1 from 'components/newsData/new1'
import New2 from 'components/newsData/new2'
import New3 from 'components/newsData/new3'
import New4 from 'components/newsData/new4'
import New5 from 'components/newsData/new5'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import c from './detail.module.scss'
// 翻译
import {
  useTranslation,
} from "next-export-i18n";

function NewDetail() {
  const [hydrated, setHydrated] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

   useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

   const handleClick = (id) => {
    router.push(`/detail/${id}`);
   };
  
  return (
    <>
       <Head>
        <title>碳通科技</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <h1>detail {id}</h1> */}
       <div className={`${c.part1} part_top`}>
        <Image src='/images/newbg.png' width='100%' style={{ height: '410px' }}></Image>
        <h1>{t('news.title')}</h1>
      </div>
      <div className={c.bg}>
        <Container>
          <Row>
            <Col md={8}>
              {id == 1 &&
              <New1  />
              }
              {id == 2 &&
              <New2 />
              }
              {id == 3 &&
              <New3 />
              }
              {id == 5 &&
                <New5 />
              }
              {id == 4 &&
                <New4 />}
            </Col>
            <Col md={4}>
              <div className={c.detail_right}>
                <div className={c.title}>
                  <img src='/images/detail_r.png' width='32' height='32' ></img>
                  <span>{t('newsDetail.subtitle')}</span>
                 
                </div>
                {/* new1 */}
                {id != 1 && 
                <div className={c.newcard} >
                   <Card className={c.newcard_card} onClick={() => handleClick(1)}>
                    <Card.Img variant="top" src="/images/news1.png" />
                    <Card.Body className={c.cardbody}>

                      <Card.Text>
                        全球首创“企业财务+碳一体化ERP解决方案”在京推出 —促进产业……
                        <p className={c.newsdate}>
                          <span>2022年10月13日</span>
                          <span>
                            <img src="/images/news_arrow.png" alt="" />
                          </span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                }
                
                {/* new2 */}
                {id != 2 && 
                 <div className={c.newcard}>
                   <Card className={c.newcard_card} onClick={() => handleClick(2)}>
                    <Card.Img variant="top" src="/images/news2.png" />
                    <Card.Body className={c.cardbody}>

                      <Card.Text>
                         埃顿集团、新加坡绿色交易所、智普信达成战略合作 合力共举碳资产……
                        <p className={c.newsdate}>
                          <span>2022年10月13日</span>
                          <span>
                            <img src="/images/news_arrow.png" alt="" />
                          </span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </div>
                }
                {/* new3 */}
                {id != 3 &&
                  <div className={c.newcard}>
                    <Card className={c.newcard_card} onClick={() => handleClick(3)}>
                      <Card.Img variant="top" src="/images/news3.png" />
                      <Card.Body className={c.cardbody}>

                        <Card.Text>
                          2022世界人工智能大会 共话低碳未来及元宇宙隐私安全
                          <p className={c.newsdate}>
                            <span>2022年10月13日</span>
                            <span>
                              <img src="/images/news_arrow.png" alt="" />
                            </span>
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                }
                {/* new4 */}
                {id != 4 &&
                  <div className={c.newcard}>
                    <Card className={c.newcard_card} onClick={() => handleClick(4)}>
                      <Card.Img variant="top" src="/images/new4.png" />
                      <Card.Body className={c.cardbody}>

                        <Card.Text>
                          希必能源、新加坡MVGX绿色交易所、智普信就联合推动碳资产开……
                          <p className={c.newsdate}>
                            <span>2022年10月13日</span>
                            <span>
                              <img src="/images/news_arrow.png" alt="" />
                            </span>
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                }
                {/* new5 */}
                {id != 5 &&
                <div className={c.newcard}>
                   <Card className={c.newcard_card} onClick={() => handleClick(5)}>
                    <Card.Img variant="top" src="/images/new5.png" />
                    <Card.Body className={c.cardbody}>

                      <Card.Text>
                           可持续发展领导者TÜV南德集团携手智普信 合推零碳数字化平台
                        <p className={c.newsdate}>
                          <span>2022年10月13日</span>
                          <span>
                            <img src="/images/news_arrow.png" alt="" />
                          </span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                }
                
              </div>
            </Col>
          </Row>
        </Container>
       </div>
   
    </>
    
  );
}

export default NewDetail;