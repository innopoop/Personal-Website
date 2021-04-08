module.exports = {
	pathPrefix: "/Personal-Website",
	siteMetadata: {
		siteName: "Ashley",
		exampleUrl: "https://www.ashley-zee.com",
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ashley`,
				short_name: `Ashley`,
				start_url: `/`,
				background_color: `#2E0303`,
				theme_color: `#F5EAEA`,
				icon: `src/images/Logo.svg`,
			},
		},
		`gatsby-plugin-styled-components`,
	],
};
