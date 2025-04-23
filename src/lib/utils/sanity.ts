import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig ={
    projectId: 'w83h9et4',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-04-17',
}
const sanityClient =createClient(config);
export default sanityClient;
