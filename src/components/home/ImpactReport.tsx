import Image from "next/image";

function ImpactReport() {
  return (
    <div className="bg-green-dark">
      <div className="container mx-auto grid p-12 grid-cols-2">
        <div>
          <svg
            width="136"
            height="20"
            viewBox="0 0 54 8"
            className="fill-biscuit"
          >
            <g>
              <path d="m30.513 2.269c-0.70092 0-1.1602 0.34419-1.3697 0.76054v-2.5617h-1.168v6.084h1.168v-2.4176c0-0.61648 0.37854-0.92069 0.87831-0.92069 0.5157 0 0.74115 0.27229 0.74115 0.84048v2.4978h1.1683v-2.6658c0-1.1208-0.58833-1.6171-1.418-1.6171zm2.0609 4.2829h1.1602v-6.084h-1.1602v6.084zm-5.9935-1.3448v-2.0174h0.88614v-0.82465h-0.88614v-1.8972h-1.1602v1.8972h-0.54v0.82465h0.54v2.1212c0 0.87267 0.4752 1.3209 1.3616 1.3209 0.31428 0 0.54783-0.056068 0.70902-0.11214v-0.89655c-0.13689 0.056068-0.26595 0.079944-0.44334 0.079944-0.29781 0-0.4671-0.15989-0.4671-0.49603zm22.115 1.3448h1.1605v-6.084h-1.1605v6.084zm3.6693-2.6017c-0.61236-0.08826-0.81378-0.19235-0.81378-0.45632 0-0.2562 0.21762-0.43218 0.59616-0.43218 0.40284 0 0.59616 0.15989 0.66069 0.50407h1.0716c-0.10503-0.96067-0.80568-1.2968-1.7404-1.2968-0.86211 0-1.6678 0.43218-1.6678 1.3049 0 0.81661 0.43497 1.1366 1.5552 1.3049 0.60399 0.087992 0.85374 0.20818 0.85374 0.49656 0 0.28812-0.20952 0.45605-0.66042 0.45605-0.5076 0-0.69309-0.21622-0.74142-0.59233h-1.0876c0.04023 0.9046 0.70092 1.4009 1.8371 1.4009 1.1116 0 1.7723-0.47215 1.7723-1.3767 0-0.89682-0.57996-1.1611-1.6354-1.3129zm-28.559-3.4877c-0.39258 0-0.69984 0.28812-0.69984 0.66986 0 0.38174 0.30726 0.66986 0.69984 0.66986 0.40122 0 0.70848-0.28812 0.70848-0.66986 0-0.38174-0.30726-0.66986-0.70848-0.66986zm17.643 5.305c-0.65286 0-1.0314-0.43245-1.0314-1.2729v-0.064116c0-0.80051 0.40284-1.2488 1.0071-1.2488 0.47547 0 0.77328 0.224 0.85401 0.71252h1.1038c-0.10476-1.2008-1.0068-1.6252-1.9821-1.6252-1.2004 0-2.1751 0.82465-2.1751 2.1775v0.063848c0 1.369 0.93447 2.1295 2.1673 2.1295 1.2244 0 1.9497-0.68837 2.0142-1.681h-1.0554c-0.05643 0.53627-0.43524 0.80856-0.90234 0.80856zm-3.8756-1.281c0 0.79246-0.37854 1.2727-1.0311 1.2727-0.66069 0-1.0314-0.4802-1.0314-1.2807v-0.063848c0-0.80078 0.38664-1.2649 1.0314-1.2649 0.65259 0 1.0311 0.4802 1.0311 1.2807v0.056068zm-1.0311-2.2175c-1.265 0-2.2237 0.85658-2.2237 2.1695v0.064116c0 1.3049 0.95877 2.1373 2.2156 2.1373 1.2647 0 2.2237-0.84048 2.2237-2.1614v-0.063848c0-1.3051-0.95067-2.1456-2.2156-2.1456zm10.351 2.2094c0 0.84853-0.43524 1.2568-1.0071 1.2568-0.53973 0-0.94284-0.4083-0.94284-1.2407v-0.064116c0-0.83243 0.37881-1.2727 0.98307-1.2727 0.58806 0 0.96687 0.40803 0.96687 1.2568v0.063848zm-0.0324-1.4969c-0.24165-0.4244-0.63639-0.71252-1.2809-0.71252-0.99117 0-1.829 0.80856-1.829 2.1856v0.063848c0 1.3931 0.83781 2.1215 1.7968 2.1215 0.59616 0 1.0876-0.35224 1.313-0.76859v0.68059h1.1602v-4.1868h-1.1602v0.61648zm-36.839 0.65377c-0.31401 0-0.56835-0.25298-0.56835-0.56497 0-0.31199 0.25434-0.56497 0.56835-0.56497 0.31428 0 0.56889 0.25298 0.56889 0.56497 0 0.31199-0.25461 0.56497-0.56889 0.56497zm1.1078-3.6353c2.2234 0 4.026 1.7907 4.026 4.0001 0 2.2089-1.8025 3.9999-4.026 3.9999-1.3273 0-2.5045-0.63821-3.2381-1.6225 0.21195-0.33936 0.37881-0.70581 0.49383-1.0894 0.48627 1.0208 1.5322 1.7271 2.7443 1.7271 1.6759 0 3.0345-1.3499 3.0345-3.0151 0-1.6654-1.3586-3.0153-3.0345-3.0153-1.583 0-2.8831 1.2045-3.0221 2.7412-0.00756 0.094967-0.01539 0.18618-0.02403 0.27417-0.03375 0.27712-0.07074 0.58294-0.14364 0.94296-0.4266 1.7539-2.0169 3.0569-3.9134 3.0569-2.2234 0-4.026-1.791-4.026-3.9999 0-2.2094 1.8025-4.0001 4.026-4.0001 1.3273 0 2.5045 0.63821 3.2381 1.6225-0.21195 0.33936-0.37881 0.70581-0.49383 1.0894-0.48627-1.0208-1.5322-1.7271-2.7443-1.7271-1.6759 0-3.0345 1.3499-3.0345 3.0153 0 1.6651 1.3586 3.0151 3.0345 3.0151 1.583 0 2.8828-1.2043 3.0221-2.7412 0.00756-0.094967 0.01539-0.18618 0.02403-0.2739 0.03375-0.27766 0.07074-0.58321 0.14364-0.94323 0.4266-1.7542 2.0169-3.0569 3.9134-3.0569zm-1.7663 4.5061c0-0.083699 0.07533-0.15211 0.16767-0.15211h3.1909c0.09207 0 0.16767 0.068408 0.16767 0.15211 0 0.96764-0.78948 1.7521-1.7631 1.7521-0.97389 0-1.7631-0.78441-1.7631-1.7521zm3.3553-1.4358c0 0.31199-0.25461 0.56497-0.56862 0.56497s-0.56862-0.25298-0.56862-0.56497c0-0.31199 0.25461-0.56497 0.56862-0.56497s0.56862 0.25298 0.56862 0.56497zm10.516 3.4816h1.1602v-4.1868h-1.1602v4.1868zm-2.5299-1.369 0.79785-2.8179h1.1197l-1.3292 4.1868h-1.1443l-0.71685-2.6258-0.77355 2.6258h-1.1602l-1.2812-4.1868h1.2247l0.74925 2.8179 0.81378-2.8179h0.95877l0.74115 2.8179zm-18.441-0.67684c0-0.083699 0.07533-0.15211 0.16767-0.15211h3.1909c0.09207 0 0.16767 0.068408 0.16767 0.15211 0 0.96764-0.78948 1.7521-1.7631 1.7521s-1.7631-0.78441-1.7631-1.7521zm3.4123-1.4358c0 0.31199-0.25461 0.56497-0.56862 0.56497s-0.56862-0.25298-0.56862-0.56497c0-0.31199 0.25461-0.56497 0.56862-0.56497s0.56862 0.25298 0.56862 0.56497zm-2.6965 0.56497c-0.31428 0-0.56889-0.25298-0.56889-0.56497 0-0.31199 0.25461-0.56497 0.56889-0.56497 0.31401 0 0.56835 0.25298 0.56835 0.56497 0 0.31199-0.25434 0.56497-0.56835 0.56497z"></path>
            </g>
          </svg>
          <h1 className="text-[32px] font-semibold mr-6 leading-10 mt-[19px] text-biscuit">
            We have released our <span className="text-yellow">2023</span>{" "}
            Impact Report!
          </h1>
          <p className="mt-6 font-medium mr-16">
            Discover the milestones weve achieved in 2022 and 2023. From the
            number of local hosts we&apos;ve supported to the economic, social,
            and environmental effects we&apos;ve generated. Take a look at the
            tangible difference we&apos; re making in the lives of our hosts,
            their communities, and the travelers.
          </p>
          <button className="mt-16 px-8 py-4 rounded-full font-semibold bg-biscuit text-magenta">
            Read our 2023 Impact Report
          </button>
        </div>
        <div className="bg-magenta-dark rounded-2xl -mt-20 grid place-items-center justify-center">
          <Image
            src="https://withlocals-com-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_256/sustainability/tect0syqxnihliyaqoah"
            width={214}
            height={300}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}

export default ImpactReport;