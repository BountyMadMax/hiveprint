<script>
  import { page } from "$app/stores";
	import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-svelte";
	import Link from "./paginator/Link.svelte";

  /** @type {{ count: number, amount: number, currentPage: number, route: string }} */
  const { count, amount, currentPage, route } = $props();

  let lastPage = Math.ceil(count / amount);

  /** @type {number[]} */
  let pageNumbers = Array.from(
    Array(lastPage > 5 ? 5 : lastPage),
    (_, i) => {
      // Numbers for the page. Min 0, max lastPage.
      return currentPage <= 2 ? i : currentPage >= lastPage - 2 ? lastPage - (5 - i) : i + (currentPage - 2)
    }
  );
</script>

<div class='w-full my-4 flex justify-between flex-col sm:flex-row gap-2'>
  <span class='flex m-auto'>
    <Link href={`${route}?page=0`} active={currentPage > 0} current={false} class='rounded-s-md'>
      <ChevronsLeft class='h-4'/>
    </Link>
    <Link href={`${route}?page=${currentPage < 1 ? 0 : currentPage - 1}`} active={currentPage > 0} current={false} class=''>
      <ChevronLeft class='h-4'/>
    </Link>

    {#each pageNumbers as pageNumber}

      <Link href={`${route}?page=${pageNumber}`} active current={currentPage === pageNumber}>
        <!-- pageNumber starts at 0, but normal user start at 1 -->
        {pageNumber + 1}
      </Link>

    {/each}

    <Link href={`${route}?page=${currentPage > (lastPage - 1) ? lastPage : currentPage + 1}`} active={currentPage < lastPage} current={false} class=''>
      <ChevronRight class='h-4'/>
    </Link>
    <Link href={`${route}?page=${lastPage}`} active={currentPage < lastPage} current={false} class='rounded-e-md'>
      <ChevronsRight class='h-4'/>
    </Link>
  </span>

  <span class='text-sm flex items-center m-auto sm:m-0'>
    Total:
    {count}
  </span>
</div>
