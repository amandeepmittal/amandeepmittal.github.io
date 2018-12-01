module.exports = {
	siteMetadata: {
		title: 'Aman Mittal Portfolio',
		author: 'Aman Mittal',
		imageUrl: 'https://i.imgur.com/TLvcVR4.jpg',
		description: 'Portfolio WebSite with Gatsby and Bulma CSS.',
		keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter`,
		email: 'mailto:amanmittal.work@gmail.com',
		twitter: 'https://twitter.com/amanhimself',
		twitterUsername: '@amanhimself',
		github: `https://github.com/amandeepmittal`,
		medium: 'https://medium.com/@amanhimself',
		instagram: 'http://instagram.com/amanhimselfcodes',
		newsletter: 'https://upscri.be/e51a31/',
		siteUrl: `https://www.amanhimself.me`,
		paypal: 'https://www.paypal.me/amanhimself',
		productHunt: 'https://www.producthunt.com/@amanhimself',
		starterKit: 'https://github.com/amandeepmittal/gatsby-bulma-quickstart'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`
			}
		},

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Aman Mittal Portfolio',
				short_name: 'amanhimself',
				start_url: '/',
				background_color: '#654ea3',
				theme_color: '#654ea3',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-96738144-3',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
