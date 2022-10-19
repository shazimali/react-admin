import  propTypes  from "prop-types";

const  CustomPagination = ({totalPages, currentPage, changePageByNumber}) => {
    const active = "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
    const inActive = "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    return (
<div className="flex mt-5  justify-center">
    <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
        {Array.from(Array(totalPages), (e, i) => {
        return <li><a href="javascript:void(0)" onClick={() => changePageByNumber(i+1)} class={i+1 === currentPage ? active : inActive}>{1+i}</a></li>
        })}
    </ul>
    </nav>
</div>
);
  }

  CustomPagination.prototype= {
    totalPages : propTypes.array.isRequired,
    currentPage: propTypes.number.isRequired,
    changePageByNumber: propTypes.func.isRequired
  }

export default CustomPagination;