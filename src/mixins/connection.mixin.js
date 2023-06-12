const connectionMixing = {
    methods:{
        fetchData: async (query) => {
            const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}`;
            const fetchOptions = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query })
            };

            try {
                const response = await fetch(fetchUrl, fetchOptions).then(response =>
                    response.json()
                );
                return response.data.homePageCollection.items;
            } catch (error) {
                throw new Error("Could not receive the data from Contentful!");
            }
        }
    }

}


export default connectionMixing
