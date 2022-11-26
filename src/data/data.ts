const reviews: number[] = [3, 5, 5, 3, 4, 5, 4, 2, 4, 4, 5, 5] ;

const colors : {colorTitle:string, colorCode:string, defaultValue:boolean }[]= [{colorTitle: "beige", colorCode : 'rgb(254, 243, 199)', defaultValue:true},{colorTitle: "gris", colorCode : 'rgb(168, 162, 158)', defaultValue:false},{colorTitle: "marron", colorCode : 'rgb(124, 45, 18)', defaultValue:false}]

// Product details data
const ProductDetails: {
	title: string;
	content: string | { contentTitle: string; description: string }[];
}[] = [
	{
		title: "Description",
		content:
			" Ce blouson colorblock col chemise possède 2 poches passepoilées avant, une fermeture pressionnée, des broderies à la poitrine,  un bas de corps et des bas de manches en bord-côtes et à rayures, un intérieur matelassé.",
	},
	{
		title: "Livraison",
		content:
			"Commandez aujourd'hui et recevez votre article sous 2 jours ouvrés. A votre domicile, au travail ou dans un point relais, Youversace vous facile votre quotidien et vous offre une livraison adaptée.",
	},
	{
		title: "Matériaux",
		content: [
			{ contentTitle: "Composition", description: "100% coton" },
			{ contentTitle: "Doublure", description: "100% polyester" },
			{
				contentTitle: "Épaisseur de la doublure",
				description: " Non doublé",
			},
			{
				contentTitle: "Conseils d'entretien",
				description:
					"Ne pas mettre au sèche-linge, nettoyage chimique possible, ne pas laver",
			},
		],
	},
];

// Product quantities
const ProductQty:number[] = [1,2,3,4,5,6,7,8,9,10];

// Product sizes
const ProductSizes: {size:string, available:boolean}[] =[
	{size: 'XS', available : false},
	{size: 'S', available : true},
	{size: 'M', available : true},
	{size: 'L', available : true},
	{size: 'XL', available : false},
];

// Reassurance Data
const reassuranceData : { title: string; content: string }[] = [
	{
	  title: "Service Client",
	  content: "Quel que soit votre point de contact préféré, nos équipes se tiennent à votre disposition pour répondre à toutes vos questions du lundi au samedi de 10h à 18h."
	},
	{
	  title: "Nos promesses",
	  content: "Notre objectif, c’est que les vêtements restent en circulation aussi longtemps que possible et redonner de la valeur aux vêtements. Pour cela, nous réparons vos vêtements favoris."
	},
	{
	  title: "CLICK & Collect",
	  content: "Faites livrer votre commande dans votre magasin favori et retrouvez nos équipes pour vous sublimer. Nous conservons votre commande au chaud pendant 15 jours."
	},
  ]

export {reviews, colors, ProductDetails, ProductQty, ProductSizes, reassuranceData};