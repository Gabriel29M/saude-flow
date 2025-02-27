import { useTheme } from "@/hooks/use-theme";

import { topProducts } from "@/constants";

import { Footer } from "@/layouts/footer";

import { PencilLine, Star, Trash, TrendingUp, TrendingDown, Soup, Receipt, CircleDollarSign, CalendarDays } from "lucide-react";


//Components
import { Button } from "@/components/ui/button";
import { BarChartMultiple } from "@/components/BarChartMultiple";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { BarCharCustomLabel } from "@/components/BarCharCustomLabel";


const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Dashboard</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-green-500 transition-colors dark:bg-blue-600/20 dark:text-green-600">
                            <Receipt size={26} />
                        </div>
                        <p className="card-title">Total de Entradas do Mês</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">U$25.154,00</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            25%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-red-500 transition-colors dark:bg-blue-600/20 dark:text-red-600">
                            <CircleDollarSign size={26} />
                        </div>
                        <p className="card-title">Total de Saídas do Mês</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">U$11.000,00</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingDown size={18} />
                            19%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-red-500 transition-colors dark:bg-blue-600/20 dark:text-red-600">
                            <CalendarDays size={26} />
                        </div>
                        <p className="card-title">Custo Fixo Mensal</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">U$15.400,00</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            15%
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-blue-500/20 p-2 text-green-500 transition-colors dark:bg-blue-600/20 dark:text-green-600">
                            <Soup size={26} />
                        </div>
                        <p className="card-title">U$ Médio do prato no Mês</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-3xl font-bold text-slate-900 transition-colors dark:text-slate-50">U$12,00</p>
                        <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            <TrendingUp size={18} />
                            19%
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-4 ">
                    <div className="card-header">
                        <p className="card-title text-xl md:text-2xl lg:text-2xl font-bold">Fluxo do Caixa</p>

                    </div>
                    <div className="card-body p-0 ">
                        <BarChartMultiple />
                    </div>
                </div>

            </div>
            <div>
                <div className="card col-span-1 md:col-span-2 lg:col-span-4 ">
                    <div className="card-header">
                        <p className="card-title">Gastos Gerais</p>
                    </div>
                    <div className="card-body p-0 ">
                        <BarCharCustomLabel />
                    </div>
                </div>

            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Top Orders</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">#</th>
                                    <th className="table-head">Product</th>
                                    <th className="table-head">Price</th>
                                    <th className="table-head">Status</th>
                                    <th className="table-head">Rating</th>
                                    <th className="table-head">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {topProducts.map((product) => (
                                    <tr
                                        key={product.number}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{product.number}</td>
                                        <td className="table-cell">
                                            <div className="flex w-max gap-x-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="size-14 rounded-lg object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <p>{product.name}</p>
                                                    <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="table-cell">${product.price}</td>
                                        <td className="table-cell">{product.status}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-2">
                                                <Star
                                                    size={18}
                                                    className="fill-yellow-600 stroke-yellow-600"
                                                />
                                                {product.rating}
                                            </div>
                                        </td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button className="text-red-500">
                                                    <Trash size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>



            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;
