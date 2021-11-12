import axios from 'axios';
import { useQuery } from 'react-query';
import MainScreen from "./MainScreen.js";
import '../assets/css/Patches.css';

const Patches = () => {
  
  const fetchData = async () => {
      const res = await axios.get('http://localhost:3030/files/PatchInfo.JSON');
      return res?.data;
  }

  const patchList = useQuery( 'patchList',  fetchData );

  function getPatchTableData() {
      if(patchList.isLoading) {
        return (
            <tr class="whitespace-nowrap">
                <td class="px-6 py-4 text-sm text-gray-500">
                    Loading more data...
                </td>
            </tr>
            );
      }
      else if(patchList.isError) {
        return (
            <tr class="whitespace-nowrap">
                <td class="px-6 py-4 text-sm text-gray-500">
                    Error loading patches...
                </td>
            </tr>
        );
      }
      return (
            patchList.data.patches.map( (patch) => {
            return (
                <tr class="whitespace-nowrap">
                    <td class="px-6 py-4 text-sm text-gray-500">
                        {patch.id}
                    </td>
                    <td class="px-6 py-4">
                        {patch.name}
                    </td>
                    <td class="px-6 py-4">
                        {patch.software}
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                        {patch.created_at}
                    </td>
                    <td class="px-6 py-4">
                        {patch.download}
                    </td>
                </tr>
            );
        } )
      );
  }

  return (
    <MainScreen title="PATCHES">
      <div class="container flex justify-center mx-auto">
        <div class="flex flex-col">
            <div class="w-full">
                <div class="border-b border-gray-200 shadow">
                    <table class="divide-y divide-gray-300 ">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-2 text-xs text-gray-500">
                                  ID
                                </th>
                                <th class="px-6 py-2 text-xs text-gray-500">
                                    Patch Name
                                </th>
                                <th class="px-6 py-2 text-xs text-gray-500">
                                    Software
                                </th>
                                <th class="px-6 py-2 text-xs text-gray-500">
                                    Created_at
                                </th>
                                <th class="px-6 py-2 text-xs text-gray-500">
                                    Download
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-300">
                            <tr class="whitespace-nowrap">
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-900">
                                        Patch 1
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">Microsoft Word</div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    2021-1-12
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                      </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr class="whitespace-nowrap">
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    2
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-900">
                                        Patch 2
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">Visual Studio</div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    2021-1-12
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                      </svg>
                                    </a>
                                </td>
                            </tr>
                            <tr class="whitespace-nowrap">
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    3
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-900">
                                        Patch 3
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">Zoom</div>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">
                                    2021-1-12
                                </td>
                                <td class="px-6 py-4">
                                    <a href="#">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                      </svg>
                                    </a>
                                </td>
                            </tr>
                            { getPatchTableData() }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </MainScreen>
  );
}

export default Patches;
