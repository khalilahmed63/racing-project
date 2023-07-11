import { Carousel } from '@mantine/carousel';
import { Card, Image, Text } from '@mantine/core';
import news from '../../public/jsonData/news.json';
import schedule from '../../public/jsonData/schedule.json';

export default function HomePage() {
  console.log(news, 'news');
  console.log(schedule, 'schedule');

  return (
    <div className="px-5 sm:px-0">
      <div className="container mx-auto max-w-screen-xl overflow-auto pb-10 pt-16">
        <h1 className="mb-3">NEWS</h1>
        <Carousel
          withIndicators
          height={240}
          slideSize="20%"
          slideGap="md"
          loop
          align="start"
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
          ]}
        >
          {news?.data?.map((item: any) => (
            <Carousel.Slide key={item?.title}>
              <Card
                className="mx-auto max-h-64 w-full min-w-max sm:w-80"
                shadow="sm"
                withBorder
                padding="sm"
                component="a"
                href="https://www.google.com/"
                target="_blank"
              >
                <Card.Section>
                  <Image src={item?.images} height={160} alt="Image" />
                </Card.Section>

                <Text weight={500} size="lg" mt="xs">
                  {item?.title.slice(0, 30)}...
                </Text>

                <Text mt={0} color="dimmed" size="sm">
                  {item?.description.slice(0, 40)}...
                </Text>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <div className="container mx-auto max-w-screen-xl overflow-auto pb-10">
        <h1 className="mb-3">FORMULA UNO SCHEDULE</h1>
        <div className="h-60 border rounded-md"></div>
      </div>
      <div className="container mx-auto max-w-screen-xl overflow-auto pb-10">
        <h1 className="mb-3">MOTOGP SHEDULE</h1>
        <div className="h-60 border rounded-md"></div>
      </div>
    </div>
  );
}
