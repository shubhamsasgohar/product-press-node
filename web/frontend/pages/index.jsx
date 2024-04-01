import {Form, Stack, Page, FormLayout, Link, TextField, Button, Layout, TextContainer} from '@shopify/polaris';


import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import {useState, useCallback} from 'react';


export default function HomePage() {
  const { t } = useTranslation();

    const handleSubmit = useCallback(() => {
    }, []);
  return (
    <Page narrowWidth>
      {/*<TitleBar title="Dashboard" primaryAction={null} />*/}
      <Layout>
        <Layout.Section>
            <Stack vertical spacing="loose">
                <Stack.Item>
                    <TextContainer>
                        <p>
                            <strong>Printify</strong>
                        </p>
                        <p>
                            Generate a new API token and shop ID from your Printify account{' '}
                            <Link url="https://printify.com/app/account/api" external>
                                here
                            </Link>
                        </p>
                    </TextContainer>
                </Stack.Item>
            </Stack>
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                        value=""
                        label="API Token"
                    />
                    <TextField
                        value=""
                        label="API Token"
                    />
                    <Button submit>Save</Button>
                </FormLayout>
            </Form>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
