import type { DevExperience } from '$lib/types/sanity';
import sanityClient from '$lib/utils/sanity';
export const load = async () => {
    const workExperience: DevExperience[]= await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');
    return {
        workExperience,
    };
}
