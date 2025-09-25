// src/data/footer.data.js
const footer = {
    brand: {
        name: "LOGO",
        logo: "/img/logo.svg", // public/img/logo.svg 기준
        copy: `© ${new Date().getFullYear()} DECODE.Lab. All rights reserved.`,
    },
    links: [
        {
            icon: "link", // material-icons 기준
            label: "GitHub",
            value: "https://github.com/byeongsu364/portfolio-process",
            href: "https://github.com/byeongsu364/portfolio-process",
        },
        {
            icon: "link",
            label: "Notion",
            value: "notion.site/portfolio",
            href: "https://www.notion.so/25c803a2c33780cdabe9f654711c628a?v=25c803a2c33780329235000ca3de5998&source=copy_link",
        },
        // {
        //   icon: "link",
        //   label: "LinkedIn",
        //   value: "linkedin.com/in/username",
        //   href: "https://linkedin.com/in/username",
        // },
    ],
};

export default footer;