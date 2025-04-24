import sanityClient, { processProjectEntries } from '$lib/utils/sanity';
export const load = async () => {
    const workExperience: SanityWorkExperience[]= await sanityClient.fetch('*[_type == "devExperience"] | order(startDate desc)');
    const rawProjects: SanityProject[] = await sanityClient.fetch("*[_type == 'project']");
    const projects =rawProjects.map(processProjectEntries);
   console.log(rawProjects[0].content);
    return {
        workExperience, 
    }

} 
