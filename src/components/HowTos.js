import MainScreen from "./MainScreen.js";
import '../assets/css/Patches.css';

const HowTos = () => {
  return (
    <MainScreen title="HOW TOS">
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
                                    How To Name
                                </th>
                                <th class="px-6 py-2 text-xs text-gray-500">
                                    Software
                                </th>
                                <th class="px-6 py-2 text-xs text-gray-500">
                                    Categories
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
                                        Share screen on Zoom
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">Zoom</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">Software</div>
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
                                        Test code
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">Visual Studio</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">Software, Testing</div>
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
                                        Find Help Desk number
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">SWIS</div>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="text-sm text-gray-500">SWIS</div>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </MainScreen>
  );
}

export default HowTos;
