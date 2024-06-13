
import { Search, ArrowUp, ArrowDown } from 'lucide-react'
import down from './../assets/Down.jpg'
import Up from './../assets/Up.jpg'
import wallet from './../assets/Wallet.jpg'
export default function Wallet() {
    return (
        <div>
            <div className="flex justify-around items-center   mt-10 h-5/6">
                <div>
                    <h1 className="text-2xl font-extrabold">Hello Daniel Samassumba</h1>
                </div>
                <div className='flex items-center bg-white rounded' >
                    <Search className='text-iconcolor' /> <input type="text" placeholder="Serch" className="outline-none p-2 rounded-full" />
                </div>
            </div>

            <div className='flex flex-col justify-around items-center rounded-lg'>
                <div className='bg-white w-8/12 mt-4 h-40 flex justify-between items-center rounded-lg'>
                    <div className=' h-1/2 w-10/12 flex justify-center items-center border-r-2 border-gray'><img src={Up} alt="" className='w-1/3' />
                        <div>
                            <p className='text-iconcolor'>Earning</p>
                            <h1 className='text-2xl font-bold'>$200k</h1>
                            <p className='flex mt-1'> <span className='text-text flex mr-1'> <ArrowUp />  37.8% </span> this month</p>
                        </div>
                    </div>
                    <div className=" h-1/2 w-10/12 flex justify-center items-center border-r-2 border-gray">
                        <img src={down} alt="" className='w-1/3' />
                        <div>
                            <p className='text-iconcolor'>Balance</p>
                            <h1 className='text-2xl font-bold'>$200k</h1>
                            <p className='flex mt-1'> <span className='text-red-500 flex mr-1'> <ArrowDown className='text-red-400' />  37.8% </span> this month</p>
                        </div>
                    </div>
                    <div className='  h-1/2 w-10/12 flex justify-center items-center '><img src={wallet} alt="" className='w-1/3' />
                        <div>
                            <p className='text-iconcolor'>Total States</p>
                            <h1 className='text-2xl font-bold'>$200k</h1>
                            <p className='flex mt-1'> <span className='text-text flex mr-1'> <ArrowUp />  37.8% </span> this week</p>
                        </div>
                    </div>
                </div>



                <div className='flex w-8/12 mt-4 h-80 items-center justify-center rounded-sm'>
                    <div className='bg-white w-8/12 mt-4 h-80 flex items-center justify-center'>
                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-40 rounded'>

                            </div>
                            Jan
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-60 rounded'>

                            </div>
                            Feb
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-40 rounded'>

                            </div>
                            Mar
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-60 rounded'>

                            </div>
                            AP
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-40 rounded'>

                            </div>
                            May
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-60 rounded'>

                            </div>
                            Jun
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-40 rounded'>

                            </div>
                            July
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-60 rounded'>

                            </div>
                            Ago
                        </div>
                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-40 rounded'>

                            </div>
                            Set
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-60 rounded'>

                            </div>
                            Out
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-40 rounded'>

                            </div>
                            Nov
                        </div>

                        <div className='flex flex-col mt-10 ml-2 '>
                            <div className='bg-button w-8 h-60 rounded'>

                            </div>
                            Dez
                        </div>
                    </div>
                    <div className='bg-white w-8/12  flex items-center justify-center ml-7 h-80 rounded-sm'>

                        <div>
                            <div className='bg-button w-80 h-80 rounded-full ml-2 flex items-center justify-center'>
                                <div className='bg-white w-1/2 h-40 rounded-full flex justify-center items-center text-lg font-bold'><h1>Resume</h1></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-8/12 mt-8 h-80'>
                 <div className='flex items-center justify-between'>
                    <h1 className='ml-8 text-2xl font-bold'>Product Sell</h1>
                  <div className='flex'>
                  <div className='flex items-center bg-backgrouidcolor rounded mt-1 mr-2' >
                    <Search className='text-iconcolor' /> <input type="text" placeholder="Serch" className="outline-none p-2 rounded-full bg-backgrouidcolor" />
                </div>
                 <div><select className='border-2 p-2'>
                 Select Something
                    <option value="">Select Something</option>
                    <option value="">Product-1</option>
                    <option value="">Product-2</option>
                    <option value="">Product-3</option>
                    </select></div>
                  </div>
                 </div>
                 <table className='w-full gb-red-500 mt-3  '>
                   <tr className='border-b-2 text-center'>
                   <th className='text-iconcolor text-sm'>Product name</th>
                    <th className='text-iconcolor text-sm'>Stock</th>
                    <th className='text-iconcolor text-sm'>Price</th>
                    <th className='text-iconcolor text-sm'>Total</th>
                   </tr>
                   <tr className='text-center '>
                    <td className='p-2'>
                        <h1 className='font-bold'>Abstract 3D</h1>
                        <p className='text-sm text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </td>
                    <td className='p-2  ml-2'>32 in stock</td>
                    <td className='font-bold'>$ 45.99</td>
                    <td className='p-2'>20</td>
                   </tr>

                   <tr className='text-center '>
                    <td className='p-2'>
                        <h1 className='font-bold'>Abstract 3D</h1>
                        <p className='text-sm text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </td>
                    <td className='p-2  ml-2'>32 in stock</td>
                    <td className='font-bold'>$ 45.99</td>
                    <td className='p-2'>20</td>
                   </tr>
                
                   <tr className='text-center '>
                    <td className='p-2'>
                        <h1 className='font-bold'>Abstract 3D</h1>
                        <p className='text-sm text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </td>
                    <td className='p-2  ml-2'>32 in stock</td>
                    <td className='font-bold'>$ 45.99</td>
                    <td className='p-2'>20</td>
                   </tr>
                   <tr className='text-center '>
                    <td className='p-2'>
                        <h1 className='font-bold'>Abstract 3D</h1>
                        <p className='text-sm text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </td>
                    <td className='p-2  ml-2'>32 in stock</td>
                    <td className='font-bold'>$ 45.99</td>
                    <td className='p-2'>20</td>
                   </tr>
                   
                 </table>
                </div>

            </div>
        </div>
    )
}
