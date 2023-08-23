import React from "react";
import {
  Skeleton,
  PizzaBlock,
  Categories,
  Sort,
  Pagination,
  NotRenderPizza,
} from "../components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filter/slice";
import { selectFilter } from "../redux/slices/filter/selectors";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { fetchPizzas } from "../redux/slices/pizza/slice";
import { selectPizzaData } from "../redux/slices/pizza/selectors";
import { SearchPizzaParams } from "../redux/slices/pizza/types";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { pageCurrent, categoryId, sort, searchValue } =
    useSelector(selectFilter);

  const { items, status } = useSelector(selectPizzaData);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        pageCurrent: String(pageCurrent),
      })
    );
  };

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       categoryId,
  //       pageCurrent,
  //     });

  //     navigate(`?${queryString}`);
  //   }

  //   if (!window.location.search) {
  //     dispatch(fetchPizzas({} as SearchPizzaParams));
  //   }
  // }, [categoryId, sort.sortProperty, pageCurrent]);

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(
  //       window.location.search.substring(1)
  //     ) as unknown as SearchPizzaParams;

  //     const sort = list.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         searchValue: params.search,
  //         categoryId: Number(params.category),
  //         pageCurrent: Number(params.pageCurrent),
  //         sort: sort || list[0],
  //       })
  //     );
  //   }
  //   isSearch.current = true;
  //   //isMounted.current = true;
  // }, []);

  React.useEffect(() => {
    window.scroll(0, 0);
    isSearch.current = false;
    if (!isSearch.current) {
      getPizzas();
    }
  }, [categoryId, sort.sortProperty, searchValue, pageCurrent]);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      {status === "error" ? (
        <NotRenderPizza />
      ) : (
        <>
          <div className="content__top">
            <Categories
              value={categoryId}
              onChangeCategory={onChangeCategory}
            />
            <Sort value={sort} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {status === "loading" ? skeletons : pizzas}
          </div>
          {categoryId === 0 && (
            <Pagination onChangePage={onChangePage} pageCurrent={pageCurrent} />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
