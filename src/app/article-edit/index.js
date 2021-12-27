import React, {useCallback, useMemo} from "react";
import Layout from "../../components/layout";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import {useParams} from "react-router-dom";
import Spinner from "../../components/spinner";
import Header from "../../containers/header";
import useInit from "../../utils/use-init";
import ArticleForm from "../../components/article-form";


function ArticleEdit() {

  const store = useStore();
  // Параметры из пути
  const params = useParams();

  // Начальная загрузка
  useInit(async () => {
    await store.get('article').load(params.id);
  }, [params.id]);

  const select = useSelector(state => ({
    article: state.article.data,
    waiting: state.article.waiting,
    categories: state.categories.items,
    countries: state.countries.items
  }));

  const callbacks = {
  }

  return (
    <Layout head={<h1>{select.article.title}</h1>}>

      <Header/>

      <Spinner active={select.waiting}>
        <ArticleForm 
          article={select.article} 
          categories={select.categories} 
          countries={select.countries}/>
      </Spinner>
    </Layout>
  );
}

export default React.memo(ArticleEdit);