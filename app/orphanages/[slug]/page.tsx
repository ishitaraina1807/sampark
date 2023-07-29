'use client';
import {
  AspectRatio,
  Button,
  Card,
  Container,
  createStyles,
  Header,
  Paper,
} from '@mantine/core';
import Image from 'next/image';
import { IconArrowLeft } from '@tabler/icons';
import { useRouter } from 'next/navigation';
import React from 'react';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  blog: {
    textAlign: 'left',
    width: '50%',
  },
  back: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    border: '1px solid #a3a3a2',
    borderRadius: '10px',
    margin: ' 20px 0',
  },
}));

interface SingleOrphanageType {
  name: string;
  slug: string;
  address: Date;
  description: string;
  image: string;
}

const getOrphanageData = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT as string}/api/orphanage/slug/${slug}`,
    { next: { revalidate: 10 } },
  );
  const response = await res.json();
  return response.orphanage;
};

const SingleOrphanage = async ({ params }) => {
  const { classes } = useStyles();
  const router = useRouter();
  const orphanageData: SingleOrphanageType = await getOrphanageData(params.slug);


  return (
    <>
      <Header height={100} mb={50}>
        <Container className={classes.header}>
          <Image
            src="/assets/Images/samparklogotransparent.png"
            alt="Sampark-logo"
            height={10}
            width={20}
          />
        </Container>
      </Header>

      <Card className={classes.blog} mx="auto">
        <Button
          my={20}
          className={classes.back}
          onClick={() => {
            router.push('/');
          }}
        >
          {' '}
          <IconArrowLeft /> Go Back
        </Button>
        <Paper shadow={'md'} my={20}>
          <AspectRatio
            ratio={16 / 9}
            // maw={300}
            mx="auto"
          >
            <Image
              src={orphanageData.image as string}
              alt="image"
              height={100}
              width={200}
              // style={{ borderRadius: '50%', border: '1px solid grey' }}
            />
          </AspectRatio>
        </Paper>
        <div>{orphanageData.description as string}</div>
      </Card>
    </>
  );
};

export default SingleOrphanage;