import { Carousel } from '@mantine/carousel';
import { Card, Image, Text } from '@mantine/core';

export default function HomePage() {
  return (
    <div className="px-5 sm:px-0">
      <div className="container max-w-screen-xl mx-auto pt-16 pb-10 overflow-auto">
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
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="container max-w-screen-xl mx-auto pb-10 overflow-auto">
        <h1 className="mb-3">FORMULA UNO SCHEDULE</h1>
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
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="container max-w-screen-xl mx-auto pb-10 overflow-auto">
        <h1 className="mb-3">MOTOGP SHEDULE</h1>
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
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              className="min-w-max w-full mx-auto sm:w-80 max-h-64"
              shadow="sm"
              withBorder
              padding="sm"
              component="a"
              href="https://www.google.com/"
              target="_blank"
            >
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                  height={160}
                  alt="No way!"
                />
              </Card.Section>

              <Text weight={500} size="lg" mt="xs">
                You&apos;ve won a million dollars in cash!
              </Text>

              <Text mt={0} color="dimmed" size="sm">
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
}
