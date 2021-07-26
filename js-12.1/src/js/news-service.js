const apiKey = 'a4c40ba18e124e0fb7c4ed0946cf202f';

export default {
    searchQuery: '',
    page: 1,
    fetchArticles() {
        const url = `https://newsapi.org/v2/everything?q=${this.query}&language=en&pageSize=10&page=${this.page}`;
        const options = {
            headers: { Authorization: apiKey },
        };

        return fetch(url, options)
            .then(res => res.json())
            .then(({ articles }) => {
                this.incrementPage();

                return articles;
            });
    },
    resetPage() {
        this.page = 1;
    },
    incrementPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
};