import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

interface ContractItem {
  contractId: number;
  memberId: number;
  memberName: string;
  helperId: number;
  helperName: string;
  helperJobType: string;
  targetName: string;
  expense: number;
  contractStatus: string;
  deleteYn: string;
  location: string;
  careRange: string;
  memberPhoneNumber: string;
  helperPhoneNumber: string;
}

const TableTwo = () => {
  const [contracts, setContracts] = useState<ContractItem[]>([]);

  useEffect(()=>{
    fetchContractList();
  },[])

  const fetchContractList = async () => {
    try{
      const response = await fetch('http://localhost:8080/v1/contract/all');
      const data = await response.json();
      setContracts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          계약 정보
        </h4>
      </div>

      <div className="grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
        <div className="col-span-1 hidden items-center sm:flex">
          <p className="font-medium">계약번호</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">도우미</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">요청자</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">잡타입</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">계약상태</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">승인</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">거절</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">결제</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">클레임</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">계약종료</p>
        </div>
      </div>

      <div className="grid grid-cols-10 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
        {contracts.map((contract)=>(
            <>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">{contract.contractId}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">{contract.helperName}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">{contract.memberName}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">{contract.helperJobType}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">{contract.contractStatus}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <Link
                    to="#"
                    className="bg-transparent font-semibold hover:text-black py-1 px-2 border border-blue-500 rounded"
                >
                  승인
                </Link>
              </div>
              <div className="col-span-1 flex items-center">
                <Link
                    to="#"
                    className="bg-transparent font-semibold hover:text-black py-1 px-2 border border-blue-500 rounded"
                >
                  거절
                </Link>
              </div>
              <div className="col-span-1 flex items-center">
                <Link
                    to="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary py-1 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-1 xl:px-3"
                >
                  결제
                </Link>
              </div>
              <div className="col-span-1 flex items-center">
                <Link
                    to="#"
                    className="inline-flex items-center justify-center rounded-md bg-meta-3 py-1 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-1 xl:px-3"
                >
                  클레임
                </Link>
              </div>
              <div className="col-span-1 flex items-center">

                <Link
                    to="#"
                    className="inline-flex items-center justify-center rounded-md bg-strokedark py-1 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-1 xl:px-3"
                >
                  계약종료
                </Link>
              </div>
            </>
        ))}
      </div>
    </div>
  );
};

export default TableTwo;
