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
			" Lorem ipsum dolor, sit amet consectetur adipisicing elit. At molestiae ea obcaecati fuga nihil, nulla voluptates. Fuga nam magnam dolor! Nisi itaque voluptates maxime id.",
	},
	{
		title: "Livraison",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nobis ea id ad numquam nostrum vel, qui omnis ab nihil ex dolore aspernatur? Enim, ipsam!",
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

// Qty options 
const ProductQty:number[] = [1,2,3,4,5,6,7,8,9,10]

export {reviews, colors, ProductDetails, ProductQty};