



interface RecentWork {
    image: string,
    testimonial: string,
    name: string,
    company: string
}

export const recentWork: RecentWork[] = [
    {
        image: "/images/recent-work/westlake.png",
        testimonial: "“these guys are great, we needed a Tableau dashboard in a short period of time and they had it ready the next day”",
        name: "Antonio Loaiza",
        company: "Westlake Accounting"
    },
    {
        image: "/images/recent-work/market-360.png",
        testimonial: "“insightpal has saved us thousands compared to hiring a full-time analyst. Would highly recommend them for other startups”",
        name: "Peter Hansen",
        company: "Market 360"
    },
    {
        image: "/images/recent-work/hill-and-co.png",
        testimonial: "“We were paying for a bunch of Tableau licenses that barely got used. Our pals converted them into Streamlit dashboards and now we're saving around $6,000 year”",
        name: "Costen Johannesen",
        company: "Hill & Co"
    },
    {
        image: "/images/recent-work/oac.png",
        testimonial: "“Our Snowflake instance needed to be cleaned up, BADLY. Our team was already swamped so we started using insightpal and now they manage everything for us!”",
        name: "Ling Wang",
        company: "OAC Controls"
    },

]