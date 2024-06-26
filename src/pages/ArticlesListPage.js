import articles from './article-content';
import ArticlesList from '../components/ArticlesList';
import { Link } from 'react-router-dom';

const ArticlesListPage = () => {
    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />
        </>
    )
}

export default ArticlesListPage;