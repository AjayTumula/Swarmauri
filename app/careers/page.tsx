
import CareerCard from "../ui-kit/CareerCard";



const CareerData = [
    {
        title: "Product Designer",
        description: "We are seeking a talented and innovative Product Designer to join our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Data Engineer",
        description: "We are looking for a highly skilled Data Engineer to join our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Machine Learning Engineer",
        description: "We are seeking a talented Machine Learning Engineer to join our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "ELT Developer",
        description: "We are seeking a skilled ETL Developer to join our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote or On-site"
    },
    {
        title: "Software Instructor",
        description: "We are looking for an experienced and enthusiastic Software Instructor to join our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Technical Writer",
        description: "We are looking for a skilled Technical Writer to join our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Technical Curriculum Developer",
        description: "We are seeking a skilled and innovative Technical Curriculum Developer to join our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Sales Manager",
        description: "We are looking for an energetic and detail-oriented Sales Manager to join our expanding sales team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Computer Vision Engineer",
        description: "We are seeking a talented and driven Computer Vision Engineer to join our dynamic team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Data Analyst",
        description: "We are seeking a talented and driven Data Analyst to join our dynamic team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Business Development Representative",
        description: "We are seeking a motivated and detail-oriented Business Development Representative (Fresher) to join our growing business development team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
    {
        title: "Python Developer",
        description: "We are looking for a talented and driven Python Developer to assist our team.",
        jobType: "Full-Time Contract (Paid)",
        location: "Remote"
    },
]

const Careers = () => {
    return <div className="mb-24">
        <h1 className="flex justify-center font-medium text-xl md:text-2xl lg:text-3xl">Careers</h1>
        {
            CareerData.map((item) => (   
                <CareerCard title={item.title}
                description={item.description} 
                jobType={item.jobType}
                location={item.location}
                />
            ))
        }
        
    </div>
}

export default Careers;