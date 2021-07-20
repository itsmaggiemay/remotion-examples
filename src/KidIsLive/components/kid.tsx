import {ComponentProps, FC, SVGProps} from 'react';

type Props = {
	k?: SVGProps<SVGPathElement>;
	i?: SVGProps<SVGPathElement>;
	d?: SVGProps<SVGPathElement>;
};

export const Kid: FC<Props & ComponentProps<'svg'>> = ({k, i, d, ...props}) => {
	return (
		<svg
			viewBox="0 0 296 181"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M196.97 164.959C203.154 163.67 209.081 162.124 214.235 159.032C214.751 158.774 215.008 158.516 215.266 158.516C216.555 157.486 217.585 156.97 218.874 155.939C224.285 152.074 230.212 148.982 235.624 144.601C239.747 141.251 243.612 137.643 247.993 134.035C251.343 131.458 254.436 128.366 257.528 125.274C263.197 119.347 268.351 113.162 274.02 107.235C278.659 102.339 282.782 96.9274 286.132 91.2581C286.905 89.9697 287.678 88.6812 288.967 87.9081C290.255 86.6196 291.286 85.5889 291.544 83.785C291.544 82.4965 292.059 81.7235 292.832 80.6927C293.605 79.4042 294.12 78.1157 294.378 76.8273C294.378 75.7965 294.636 74.7657 294.894 73.9926C295.924 71.6734 295.667 69.3541 294.894 67.2926C294.378 66.0041 294.12 64.7156 293.863 63.4272C293.863 59.8195 292.832 56.4694 291.544 53.3771C289.74 47.9655 287.163 42.554 284.328 37.6578C283.297 35.8539 282.267 34.0501 280.978 32.5039C274.536 25.0308 266.805 19.6192 256.755 17.8153C250.312 16.5268 243.612 16.2692 237.17 16.7845C235.366 16.7845 233.562 17.2999 232.016 18.073C229.697 18.8461 227.635 19.6192 225.316 19.6192C224.028 19.8769 222.997 20.3923 221.966 20.6499C219.389 21.6807 217.07 22.7115 214.235 23.2269C212.689 23.4846 211.143 24.5154 209.855 25.5461C208.051 27.8654 205.474 28.8962 202.897 29.9269C200.835 30.9577 199.031 31.9885 197.485 33.7923C196.454 34.8231 195.424 35.5962 194.135 36.1116C190.527 37.1424 188.466 39.977 186.404 42.8117C185.374 44.1001 185.116 45.6463 185.116 47.1924C185.116 48.2232 185.374 48.9963 186.404 49.5117C187.435 49.7694 187.95 50.0271 188.466 50.8002C189.497 50.2848 190.785 49.7694 191.816 48.9963C193.877 47.7078 196.197 46.1617 198.516 44.8732C199.547 44.3578 200.578 43.5847 201.608 43.327C201.866 43.327 202.124 43.327 202.124 43.5847C202.381 43.5847 202.381 43.8424 202.124 43.8424C201.866 44.3578 201.351 44.8732 200.835 45.1309C199.031 46.1617 197.227 47.4501 195.166 48.2232C192.847 49.5117 191.043 51.3155 189.239 53.1194C187.951 54.4079 187.951 55.954 188.724 57.7579C189.497 59.0464 190.27 59.5618 192.074 59.3041C192.847 59.3041 193.62 59.0464 194.393 58.7887C194.651 58.7887 195.166 59.0464 195.166 59.3041C195.424 59.5618 195.424 59.8195 195.166 60.0771C193.62 61.3656 193.104 63.1695 193.62 65.231C193.877 65.4887 193.62 66.0041 193.62 66.2618C192.847 69.0965 192.589 72.1888 191.301 75.0234C190.527 77.085 190.012 79.1465 189.497 81.2081C188.466 86.8773 187.177 92.5466 185.889 98.2159C185.889 98.989 185.631 99.762 185.374 100.535C183.827 104.916 183.312 109.554 182.539 113.935C181.25 121.666 179.962 129.397 180.477 137.385C180.477 139.447 179.704 140.993 177.643 141.766C176.097 142.539 175.066 143.828 174.293 145.632C173.52 147.178 174.035 148.466 175.839 148.724C176.87 148.982 177.9 148.982 178.931 149.497C180.477 149.755 180.735 151.043 179.704 152.074C178.931 153.105 178.416 153.62 178.674 154.909C178.674 156.197 178.931 157.486 179.962 158.259C182.024 160.062 184.085 162.382 186.92 162.897C187.95 163.155 188.724 163.67 189.754 164.186C192.074 165.216 194.393 165.474 196.97 164.959ZM218.358 158.774C219.132 159.032 219.905 158.516 220.42 158.001C221.193 157.486 222.224 157.228 222.482 156.197L222.224 155.939C221.451 156.455 220.678 156.712 219.905 156.97C218.358 157.743 217.585 158.774 218.358 158.774ZM228.408 152.332C228.408 152.589 228.924 152.332 229.182 152.332C229.439 151.816 229.955 151.559 230.47 151.043C229.955 151.301 229.182 151.559 228.666 151.816C228.408 151.816 228.151 152.074 228.408 152.332ZM230.47 151.043C230.985 150.785 231.501 150.528 231.759 150.27C231.243 150.528 230.985 150.785 230.47 151.043ZM209.597 142.539C209.339 142.539 209.081 142.282 209.081 142.024C208.824 142.024 208.824 141.766 208.824 141.508C209.339 140.478 210.37 139.962 211.401 139.447C216.039 136.355 220.935 133.005 225.574 129.397C227.635 127.851 229.697 126.305 231.501 124.501C232.532 123.47 233.562 122.697 234.851 122.181C234.078 123.728 233.047 125.016 231.759 126.305C228.151 129.912 224.028 133.005 219.905 136.097C217.328 137.901 214.493 139.705 211.916 141.508C211.143 141.766 210.37 142.024 209.597 142.539ZM232.532 149.497C235.882 148.724 238.459 146.405 240.52 143.828C237.17 144.859 234.851 147.178 232.532 149.497ZM208.308 156.97C208.051 156.712 207.793 156.712 207.793 156.712C207.535 156.197 207.535 155.939 207.535 155.682C208.051 154.651 208.824 153.878 209.855 153.362C211.401 152.589 212.689 151.816 214.235 150.785C221.708 146.662 228.666 141.508 235.624 136.355C242.324 130.943 248.509 125.016 254.951 119.604C255.209 119.089 255.466 118.831 255.982 118.574C256.497 118.316 257.013 118.058 257.27 118.574C257.528 118.831 257.27 119.347 257.013 119.604C256.497 120.12 255.982 120.635 255.466 121.151C254.178 122.955 252.632 124.758 250.828 126.047C250.312 126.562 249.797 127.335 249.024 127.851C248.509 128.366 247.993 129.139 247.478 129.655C242.066 133.778 237.428 138.674 232.016 142.797C225.574 147.693 218.616 152.074 211.401 155.939C210.628 156.197 209.855 156.455 209.081 156.712C208.824 156.97 208.566 156.712 208.308 156.97ZM240.52 143.828C240.778 143.57 241.035 143.57 241.551 143.312C241.809 143.312 241.809 143.055 241.551 142.797L241.293 143.055C241.035 143.312 240.778 143.57 240.52 143.828ZM208.566 138.932C208.308 138.674 208.051 138.674 207.793 138.416C207.793 138.416 208.051 138.158 208.051 137.901C208.824 136.612 210.112 135.582 211.401 134.808C214.235 132.747 217.07 130.685 219.905 128.624C225.316 124.758 230.728 120.378 235.366 115.481C236.139 114.451 237.17 113.678 238.201 112.647C238.974 111.874 240.005 111.358 241.035 110.843C241.551 110.585 241.809 110.585 242.066 110.843C242.324 111.101 242.066 111.358 242.066 111.616C241.551 112.389 241.036 112.904 240.52 113.678C239.489 114.708 238.716 115.739 237.685 116.77C232.532 120.893 227.893 125.274 222.739 129.397C219.389 132.232 215.524 134.808 211.916 137.385C210.885 138.158 209.855 138.932 208.566 138.932ZM245.674 139.447C245.932 139.189 246.189 138.932 246.189 138.674C245.932 138.932 245.674 139.189 245.674 139.447ZM214.235 107.235C214.235 106.977 214.493 106.72 214.493 106.72C214.493 106.204 214.493 105.947 214.493 105.431V105.689C214.493 105.947 214.235 106.204 214.235 106.462C214.235 106.72 214.235 106.977 214.235 107.235ZM246.189 138.674C246.447 138.674 246.705 138.416 246.962 138.158C246.705 138.416 246.447 138.416 246.189 138.674ZM219.131 87.9081C219.647 88.1658 219.647 87.6504 219.905 87.3927C219.647 87.3927 219.647 87.135 219.647 86.8773C219.389 87.135 219.389 87.135 219.131 87.3927C219.131 87.6504 219.131 87.9081 219.131 87.9081ZM246.962 138.158C250.055 137.128 252.374 135.066 254.693 132.747C256.755 130.943 258.301 128.881 260.363 127.078C263.713 124.243 266.032 120.635 268.866 117.801C269.897 116.77 270.413 115.481 270.928 114.193C268.866 115.739 267.32 117.543 265.774 119.347C260.878 124.758 256.239 130.17 250.312 134.808C249.282 135.839 248.251 136.87 246.962 138.158ZM216.812 81.7235C216.812 81.4658 217.07 81.2081 217.328 80.9504C217.585 80.6927 217.843 80.435 218.101 80.435C217.843 80.6927 217.585 80.9504 217.328 80.9504C217.328 81.2081 217.07 81.4658 216.812 81.7235ZM187.693 51.5732C188.208 51.3155 188.466 51.0579 188.466 50.8002C188.208 51.0579 187.951 51.3155 187.693 51.5732ZM219.389 73.4772C219.132 73.2195 218.874 73.2195 218.874 72.9619C218.874 72.4465 218.874 71.9311 218.874 71.6734C219.647 69.8695 220.42 68.8387 220.678 69.3541C221.193 70.3849 220.678 71.4157 220.162 72.1888C220.162 72.7042 219.647 72.9619 219.389 73.4772ZM264.743 111.358C264.486 111.101 264.486 111.101 264.743 110.843H265.001V111.101L264.743 111.358ZM245.674 110.07C246.189 108.524 247.22 107.493 247.993 106.462C250.055 104.143 252.374 101.824 254.436 99.2467C255.724 97.9582 257.013 96.412 258.043 94.8659C259.074 93.062 260.363 91.5158 262.166 90.485C261.909 91.7735 261.136 92.8043 260.363 93.8351C259.074 95.3812 258.043 96.9274 257.013 98.4736C253.663 102.597 250.312 106.462 246.447 109.812C246.447 110.07 246.189 110.07 245.674 110.07ZM211.401 121.666C210.112 121.151 209.855 120.893 210.37 119.862C210.628 118.831 210.885 118.058 211.143 117.028C211.658 116.254 211.916 115.224 211.658 114.193C211.143 112.904 211.401 111.616 211.916 110.585C212.431 109.297 212.947 108.008 213.205 106.72C213.462 105.947 213.978 105.689 214.493 105.689V105.431C215.524 104.143 216.039 102.854 216.297 101.308C216.297 101.051 216.297 100.793 216.039 100.793C216.039 100.535 215.524 100.793 215.524 100.793C215.266 101.051 215.008 101.566 214.493 101.308C213.978 101.051 214.235 100.535 214.235 100.02C214.751 98.7313 215.524 97.7005 216.555 96.9274C218.101 95.8966 218.101 95.6389 217.07 94.0928C216.555 93.3197 216.555 92.8043 216.812 92.2889C217.585 90.485 217.843 88.4235 217.843 86.3619C217.843 85.0735 218.616 84.0427 219.389 83.0119C220.162 81.7234 220.678 80.435 220.678 78.6311C220.678 77.6003 221.193 76.5696 221.708 75.5388C222.739 72.9619 224.285 70.1272 224.543 67.0349C224.543 66.2618 225.058 65.4887 225.316 64.7156C225.574 64.2003 225.832 63.4272 225.832 62.6541C225.832 58.2733 228.151 55.181 232.016 52.8617C232.532 52.604 232.789 52.3463 233.305 52.0886C232.789 52.0886 232.016 52.0886 231.501 52.0886C231.243 51.8309 230.728 51.5733 230.985 51.3156C230.985 51.0579 231.243 50.5425 231.501 50.5425C232.532 50.0271 233.562 49.7694 234.593 49.5117C236.655 48.7386 238.716 48.7386 241.035 48.4809C241.551 48.4809 242.582 48.4809 242.839 48.9963C243.87 50.2848 244.643 50.0271 245.674 49.254C246.189 48.9963 247.22 48.4809 247.993 48.2232C248.766 47.9655 249.797 47.9655 250.57 48.4809C251.859 49.7694 253.147 49.7694 254.693 49.254C256.755 48.4809 258.816 48.4809 261.136 48.9963C263.197 49.5117 265.516 50.0271 267.578 50.8002C268.609 51.0579 269.382 51.3156 270.155 51.8309C271.186 52.604 271.701 53.3771 271.443 54.6656C271.443 55.6964 270.928 56.7271 270.413 57.7579C268.866 60.0772 267.578 62.6541 266.29 65.231C264.743 68.3234 262.682 71.158 261.136 74.2503C260.62 75.0234 259.847 75.7965 259.074 76.3119C256.497 79.1465 254.178 81.9811 252.889 85.5889C251.601 88.1658 249.282 89.9697 247.22 92.0312C244.386 95.1235 241.036 97.9582 237.943 101.051C234.593 104.916 230.728 108.008 227.12 111.616C226.347 112.389 225.316 113.42 224.543 114.451C222.997 116.512 221.193 118.316 219.389 119.862C217.07 121.666 214.493 122.955 211.401 121.666ZM270.928 114.193C271.186 113.935 271.443 113.678 271.443 113.678V113.42C271.186 113.678 270.928 113.935 270.928 114.193ZM271.443 113.42C271.701 113.42 271.959 113.162 272.216 112.904C271.959 113.162 271.701 113.162 271.443 113.42ZM272.99 112.131C274.536 111.101 275.824 109.554 276.597 107.751C275.051 108.781 273.505 110.07 272.99 112.131ZM270.155 105.689C269.897 105.431 269.897 105.174 269.897 104.916C270.155 103.627 271.186 102.597 272.474 101.824C272.732 101.566 272.99 101.824 272.99 102.081C272.99 102.339 272.99 102.597 272.99 102.854C272.474 103.885 271.701 104.658 270.67 105.431C270.67 105.689 270.155 105.689 270.155 105.689ZM278.143 106.204C278.401 106.204 278.659 105.947 278.917 105.689H278.659C278.401 105.689 278.401 105.947 278.143 106.204ZM278.659 105.689C280.978 103.885 280.978 103.885 281.236 101.824C279.947 102.854 279.432 104.143 278.659 105.689ZM191.043 46.6771C192.074 45.1309 193.104 44.3578 194.135 43.5847C197.743 41.5232 201.093 38.9462 204.958 37.1424C210.885 33.7923 217.07 30.7 223.77 28.8962C231.501 26.8346 239.232 25.0308 247.22 25.5461C247.993 25.5461 248.509 25.5461 249.282 25.8038C249.282 25.8038 249.539 25.8038 249.539 26.0615C249.539 26.0615 249.539 26.3192 249.282 26.3192C249.024 26.5769 248.509 26.8346 247.993 26.8346C237.428 27.8654 227.12 30.7 216.812 34.0501C211.916 35.5962 207.278 37.1424 203.154 40.2347C200.578 42.0386 198.001 43.327 195.424 44.8732C194.135 45.3886 192.847 46.1617 191.043 46.6771ZM287.678 92.8043C287.678 92.5466 287.936 92.5466 288.194 92.2889C288.194 92.0312 287.936 91.7735 287.936 91.5158C287.678 91.7735 287.42 91.7735 287.42 92.0312C287.163 92.2889 287.163 92.8043 287.678 92.8043ZM227.378 47.4501C226.862 47.1925 226.347 46.9348 226.347 46.1617C226.089 45.6463 226.347 45.1309 226.862 44.8732C227.378 44.6155 228.151 44.3578 228.666 44.1001C235.366 42.2963 242.066 41.0078 248.766 40.7501C250.57 40.7501 252.116 40.7501 253.405 41.2655C253.663 41.5232 253.92 41.7809 253.92 41.7809C253.92 42.0386 253.663 42.2963 253.405 42.2963C251.859 42.8116 250.055 43.327 248.251 43.327C242.066 44.1001 236.139 45.3886 230.212 46.9348C229.439 47.1924 228.408 47.4501 227.378 47.4501ZM217.843 36.8847C217.843 36.8847 217.585 36.627 217.328 36.3693C217.328 36.3693 217.328 35.8539 217.585 35.8539C217.843 35.5962 218.358 35.0808 218.616 35.0808C225.574 32.2462 232.532 30.4423 240.005 29.6692C240.52 29.6692 241.293 29.4116 242.066 29.9269C241.551 30.9577 240.52 30.9577 239.747 31.2154C236.397 31.9885 232.789 32.7616 229.439 33.7923C226.605 34.5654 223.77 35.5962 220.678 36.3693C219.905 36.627 218.874 36.627 217.843 36.8847ZM287.678 82.4965C286.905 82.2388 287.163 81.7235 287.42 81.2081C287.678 80.435 287.936 79.6619 288.709 79.1465H288.967C288.967 79.1465 289.224 79.4042 289.482 79.6619C289.224 80.435 288.709 81.2081 288.451 81.9811C288.194 82.2388 287.936 82.4965 287.678 82.4965ZM251.859 29.1539C251.601 29.1539 251.343 28.8962 251.601 28.6385H251.859C252.116 28.6385 252.116 28.8962 252.374 28.8962C252.116 29.1539 251.859 29.1539 251.859 29.1539Z"
				fill="white"
				{...d}
			/>
			<path
				d="M137.135 175.009C138.166 175.524 139.196 175.266 139.712 174.236C140.485 172.947 140.743 171.401 141.516 170.113C141.773 169.082 142.804 169.082 143.577 169.855C144.35 170.628 144.35 171.659 144.866 172.689C145.123 173.205 145.897 173.205 146.154 172.432C147.443 170.628 147.7 168.824 148.216 166.763C149.504 156.455 151.05 146.147 152.854 136.097C154.4 127.078 156.462 118.058 158.266 109.039C159.554 101.824 161.358 94.6082 162.647 87.6504C164.45 76.0542 168.058 64.7157 170.12 53.3771C170.893 48.7386 173.727 44.3578 172.954 39.4616C172.697 38.9463 173.212 38.1732 173.212 37.6578C173.727 36.1116 173.985 34.8231 172.439 34.0501C171.151 33.277 170.893 31.9885 170.893 30.9577C171.151 29.1539 171.151 27.35 171.408 25.8039C171.408 23.7423 171.408 21.6807 171.408 19.6192C171.408 17.0422 170.12 14.9807 167.543 14.2076C165.997 13.6922 164.708 12.9191 163.42 11.8884C161.1 9.56912 157.75 10.3422 155.689 13.1768C155.174 14.2076 154.4 15.4961 153.885 16.7846C151.823 21.6807 148.989 26.5769 147.958 31.9885C147.958 32.7616 147.7 33.5347 147.185 34.3078C145.639 36.627 144.866 38.9463 144.35 41.2655C143.062 47.4502 139.97 52.8617 139.97 59.0464C139.97 60.3349 138.939 61.6233 138.681 62.9118C137.908 65.2311 137.135 67.808 137.135 70.1272C136.877 73.4773 136.877 76.8273 135.589 79.9196C135.073 80.1773 135.073 80.435 135.073 80.9504C135.331 84.3004 134.3 87.3927 133.527 90.7428C133.012 94.0928 131.981 97.1851 130.95 100.535C129.404 107.751 128.373 114.966 127.6 121.924C126.827 126.562 126.312 130.943 125.796 135.582C125.281 139.447 125.796 143.57 125.023 147.693C124.766 151.043 124.25 154.651 123.993 158.001C123.477 161.351 124.25 164.186 126.312 166.763C127.085 167.793 127.858 168.566 129.146 168.566C130.177 168.566 131.208 169.339 131.981 167.536C132.239 167.02 132.754 167.536 133.012 167.793C133.269 169.082 133.527 170.113 134.043 171.143C134.558 172.689 135.589 173.978 137.135 175.009ZM133.527 153.362C133.527 152.847 133.527 152.589 133.527 152.074C133.785 151.559 134.043 151.559 134.043 152.074C134.3 152.332 134.043 152.847 134.043 153.362C134.043 153.362 133.785 153.362 133.527 153.362ZM151.823 157.228C152.339 157.228 152.597 156.712 152.597 156.455C153.112 152.074 153.885 147.951 154.658 143.57C153.112 148.209 151.566 152.589 151.823 157.228ZM134.816 145.632C134.558 145.632 134.3 145.632 134.043 145.116V144.859C135.073 138.674 135.846 132.747 136.62 126.562C136.877 124.758 137.65 122.697 138.423 120.893C138.681 120.635 138.681 120.378 138.681 120.12C138.681 120.378 138.423 120.635 138.423 120.893C138.423 126.82 137.135 132.747 136.362 138.416C135.846 140.735 135.589 143.055 135.073 145.374L134.816 145.632ZM148.216 143.312V143.055C148.216 143.055 148.216 142.797 148.473 142.797V143.055C148.473 143.055 148.473 143.312 148.216 143.312ZM156.204 129.655C156.462 129.397 156.72 129.139 156.977 128.881C156.977 128.624 156.72 128.366 156.72 128.108C156.72 128.366 156.462 128.624 156.462 128.881C156.462 129.139 156.204 129.397 156.204 129.655ZM139.97 114.193C138.939 114.193 139.454 113.42 139.454 112.904C140.227 109.039 139.97 104.916 141.516 101.051C141.516 100.793 141.773 100.535 142.031 100.277C142.031 100.535 142.289 100.793 142.289 101.051C142.546 101.051 142.289 101.308 142.289 101.566C142.289 101.824 142.289 102.081 142.289 102.339C141.516 105.947 141.258 109.554 140.485 113.162C140.485 113.42 140.227 114.193 139.97 114.193ZM143.577 94.3505C142.546 94.8659 142.546 93.3197 143.062 91.2582C143.062 91.0005 143.062 90.7428 143.32 90.4851C143.32 90.2274 143.577 90.2274 143.835 89.9697C144.093 90.2274 144.093 90.4851 144.35 90.7428C144.35 91.0005 144.35 91.2582 144.35 91.7735C144.093 92.5466 144.35 93.5774 143.577 94.3505ZM145.123 82.7542C145.381 79.1465 145.897 75.2811 146.927 71.6734C147.958 68.0657 148.473 64.2003 149.762 60.5926C148.989 67.5503 147.7 74.508 146.154 81.4658C146.154 81.9812 146.154 82.7542 145.123 82.7542ZM164.966 88.4235H165.224V88.1658H164.966V88.4235ZM151.308 54.9233C151.308 54.6656 151.05 54.4079 151.308 54.1502C151.308 53.8925 151.566 53.3771 151.566 53.1194C151.823 51.0579 151.823 49.254 153.37 46.6771C153.37 49.5117 152.339 51.3156 151.566 52.8617C151.566 53.3771 151.566 53.8925 151.566 54.1502C151.566 54.4079 151.308 54.6656 151.308 54.9233ZM169.347 66.0041C170.635 64.458 170.893 62.6541 170.377 60.8502C170.12 62.6541 169.862 64.2003 169.347 66.0041ZM154.143 42.554C154.143 39.7193 155.174 37.6578 155.689 35.3385C155.947 34.8231 156.204 34.0501 156.72 34.0501C157.75 34.3078 157.235 35.0809 156.977 35.8539C156.462 38.9463 156.204 39.7193 154.143 42.554Z"
				fill="white"
				{...i}
			/>
			<path
				d="M32.6485 180.678C33.6793 181.193 34.9678 181.193 35.7409 179.905C36.5139 178.359 38.3178 178.101 39.864 177.586C41.4101 177.07 41.4101 177.07 41.9255 179.132C41.9255 179.647 41.9255 180.163 42.4409 180.163C42.6986 180.42 42.9563 180.163 43.214 179.905C45.5332 177.328 47.3371 174.493 46.564 170.37C45.5332 166.247 45.0179 161.866 44.2448 157.743C43.7294 154.909 43.9871 152.074 44.2448 149.497C44.5025 148.209 45.0179 147.178 46.0486 146.405C47.3371 145.632 48.1102 144.859 48.3679 143.312C48.6256 142.282 49.3986 142.024 50.4294 142.024C53.0064 142.282 55.3256 142.282 57.9026 142.539C64.6026 143.312 71.045 144.343 77.745 145.116C81.095 145.374 84.445 145.632 87.7951 145.889C94.7528 146.92 101.453 147.693 108.411 148.466C119.491 150.012 130.83 151.301 141.653 154.136C142.426 154.393 143.715 154.393 144.745 154.393H145.003C145.003 154.136 145.003 153.62 144.745 153.62C143.972 153.105 143.199 152.847 142.426 152.589C138.045 151.043 133.665 149.755 129.284 148.982C123.872 148.209 118.718 147.435 113.307 146.662C105.061 145.632 96.5567 144.343 88.0528 143.312C83.9297 142.797 79.8065 142.539 75.6834 142.024C68.468 141.251 61.2526 140.22 54.0372 139.189C53.0064 138.932 51.7179 138.932 50.6871 138.674C49.6563 138.416 48.8833 137.643 49.3987 137.128C49.6564 136.612 50.4294 136.612 50.9448 136.612C52.7487 136.87 54.8102 136.87 56.6141 137.128C62.2834 137.901 67.9526 138.674 73.6219 139.447C87.5374 141.251 101.453 142.539 115.368 144.601C125.161 146.147 134.953 147.435 144.488 150.012C145.003 150.27 145.519 150.27 145.776 150.27C147.838 150.528 148.869 149.755 148.869 147.693C148.869 146.147 148.353 144.859 147.065 144.343C145.776 143.57 144.488 143.055 142.942 142.797C135.211 140.22 126.965 138.674 118.718 137.385C115.111 136.87 111.503 136.097 107.638 135.066C109.441 134.551 110.73 134.551 112.018 134.808C122.584 136.87 133.665 137.643 143.972 140.993C145.003 141.251 146.034 141.508 147.065 141.766C142.684 139.705 137.788 138.416 133.149 137.385C124.13 135.324 114.853 134.035 105.576 132.747C89.0835 130.17 72.3334 127.851 55.841 125.531C54.5525 125.274 53.5218 125.016 52.2333 124.758C51.9756 124.501 51.4602 124.243 51.7179 123.728C51.7179 123.47 52.2333 123.212 52.7487 123.212C54.0372 123.212 55.3256 123.212 56.6141 123.47C63.3141 124.758 70.0142 125.531 76.7142 126.562C85.7335 127.851 94.4951 129.397 103.514 130.428C110.472 131.201 117.43 133.005 124.388 133.778C131.345 134.808 138.303 136.097 145.003 138.416C146.034 138.674 146.807 138.674 147.838 138.932C148.611 138.932 149.384 137.901 149.126 137.128C149.126 136.355 148.869 135.582 148.353 135.066C147.065 133.262 145.261 131.716 142.684 131.458C141.395 131.201 140.107 130.943 138.819 130.685C135.984 129.912 133.407 129.139 130.572 129.139C127.995 129.139 125.418 128.624 123.099 127.851C120.522 126.82 117.688 126.562 114.853 126.562C112.534 126.562 110.214 126.047 107.895 125.274C105.576 123.985 102.999 123.728 100.164 123.47C96.5567 123.47 93.2066 122.181 89.5989 122.697C89.0835 122.697 88.5682 122.439 88.0528 122.181C80.8373 119.862 73.6219 118.831 66.1488 118.316C64.3449 118.316 62.5411 117.801 60.4795 117.543C59.191 117.285 58.4179 116.512 58.4179 114.966C58.4179 114.451 58.4179 113.935 58.4179 113.162V113.42C57.6449 113.678 56.8718 113.935 56.0987 114.451C55.841 114.451 55.5833 114.193 55.3256 113.935C55.3256 113.935 55.0679 113.42 55.3256 113.162C56.6141 111.616 57.9026 110.07 59.191 108.524C67.9526 99.7621 76.7142 91.2582 84.9604 81.9812C91.6605 74.7657 98.6182 67.5503 105.576 60.3349C108.668 57.2425 111.761 54.4079 114.338 50.8002C115.884 48.7386 117.945 47.1925 120.007 45.3886C120.522 44.6155 121.553 44.3578 122.326 45.1309C124.13 43.327 124.13 43.327 123.099 41.5232C125.934 38.1732 128.511 34.5654 131.345 31.2154C132.634 29.4116 133.665 27.8654 133.665 25.8039C133.149 26.3192 132.634 26.8346 131.861 27.35C131.861 27.6077 131.603 27.6077 131.603 27.6077C131.345 27.35 131.088 27.0923 131.088 26.8346C131.345 25.8038 131.861 24.7731 132.376 24C133.407 21.9384 133.922 19.6192 134.438 17.2999C134.695 14.723 134.438 12.6615 132.376 10.8576C131.345 9.82681 131.088 8.79603 130.315 7.50756C128.768 4.93062 125.418 3.89985 122.584 5.44602C121.553 5.9614 120.78 6.73449 119.749 7.50756C116.915 10.3422 113.822 13.1768 110.988 16.0115C108.668 18.3307 106.607 20.3923 104.287 22.4538C99.3913 27.0923 94.4951 31.2154 89.5989 35.8539C81.095 43.5847 73.3642 52.0886 65.8911 60.8502C63.5718 63.4272 60.9949 66.0041 58.4179 68.3234C57.3872 69.6118 56.0987 70.3849 54.5525 69.0964C54.0371 68.3234 53.2641 69.0965 52.7487 69.6118C52.491 69.8695 51.9756 70.6426 51.4602 70.1272C51.2025 69.8695 50.9448 69.3541 50.9448 68.8388C51.2025 67.2926 51.4602 66.0041 51.7179 64.458C52.2333 61.881 52.491 59.3041 54.8102 57.2425C55.3256 56.9848 55.3256 55.9541 55.5833 55.4387C55.5833 54.6656 55.5833 54.1502 55.0679 53.8925C53.7795 53.6348 53.5218 52.8617 53.7795 51.831C54.2948 49.5117 54.5525 47.1925 54.8102 44.8732C54.8102 43.8424 55.3256 42.554 55.841 41.5232C56.3564 40.2347 57.1295 39.2039 57.6449 37.9155C56.6141 36.627 56.3564 35.0808 57.1295 33.277C59.191 29.4116 58.6756 24.7731 59.4487 20.3923C59.7064 20.1346 59.191 19.8769 59.191 19.8769C58.9333 19.8769 58.6756 20.1346 58.4179 20.1346C57.9026 22.7115 57.3872 25.0308 56.6141 27.6077C56.3564 28.8962 56.3564 30.4423 55.0679 31.4731C53.2641 30.1846 54.5525 28.6385 54.5525 27.0923C54.5525 26.5769 54.5525 25.8038 54.8102 25.2884C55.3256 21.423 55.841 17.8153 56.3564 13.9499C56.6141 10.3422 55.5833 7.24987 51.9756 5.44602C50.1717 4.67293 48.8833 3.38446 47.5948 1.8383C45.5332 -0.480949 42.9563 0.0344325 40.6371 0.292123C38.5755 0.292123 37.5447 1.8383 36.7716 3.38446C36.2563 4.67293 35.4832 5.9614 35.2255 6.99218C32.6485 16.0115 29.2985 24.7731 27.237 33.7924C26.4639 38.4309 25.4331 42.8117 23.6292 47.1925C22.3408 50.8002 21.8254 54.4079 21.31 58.2733C21.0523 59.5618 21.0523 60.8502 20.7946 62.1387C19.7638 66.2618 19.5061 70.3849 18.7331 74.508C17.7023 83.2696 16.6715 92.0312 15.8984 100.793C15.6407 103.627 15.383 106.204 14.6099 108.781C12.2907 115.224 8.68298 121.151 2.75602 125.274C0.436773 127.078 -0.0786153 128.881 0.694467 131.716C1.20985 133.262 2.49833 133.778 3.7868 132.747C5.59066 131.716 7.13683 130.17 8.68299 129.139C9.19838 128.624 9.97145 128.366 10.4868 128.108C10.7445 127.851 11.0022 128.108 11.0022 128.108C11.2599 128.366 11.2599 128.624 11.2599 128.881C11.0022 129.912 10.4868 130.428 9.71376 130.943C7.9099 132.747 6.36374 134.551 4.55988 136.355C6.36374 135.066 8.1676 134.035 10.2292 132.747C10.4868 132.489 11.0022 132.489 11.2599 133.005C11.2599 133.262 11.2599 133.778 11.0022 133.778C9.97146 135.066 8.68299 136.355 7.39452 137.643C6.36374 138.674 6.36374 139.962 6.87913 141.251C7.39452 142.797 8.68299 143.828 10.2292 144.601C11.0022 145.116 12.033 145.889 12.033 146.92C12.8061 151.816 14.3523 156.455 14.3523 161.351C14.3523 162.897 14.61 164.443 15.1253 165.732C16.4138 168.824 18.2177 171.916 21.8254 172.689C24.9177 173.463 26.9793 175.009 28.2677 177.586C29.2985 179.132 30.8447 180.163 32.6485 180.678ZM43.4717 172.947C43.214 172.432 43.214 171.659 43.214 170.886C43.214 170.628 43.4717 170.37 43.7294 170.37C43.7294 170.37 44.2448 170.37 44.2448 170.628C44.7602 171.401 45.0179 171.916 45.2755 172.689C44.2448 173.72 43.7294 173.72 43.4717 172.947ZM46.3063 154.136H46.8217C46.8217 153.62 46.8217 153.362 46.8217 152.847C46.564 152.847 46.564 152.847 46.3063 152.847C46.3063 153.362 46.3063 153.62 46.3063 154.136ZM73.3642 146.92C73.6219 146.92 74.1373 146.92 74.395 146.92C74.1373 146.92 73.6219 146.662 73.3642 146.662C73.1065 146.662 72.8488 146.662 72.5911 146.662C72.8488 146.662 73.1065 146.92 73.3642 146.92ZM62.0257 128.108C58.6756 128.624 58.6756 128.624 55.0679 127.335C54.0372 127.335 53.0064 127.335 51.4602 127.335C53.2641 126.562 54.0372 127.078 55.0679 127.335C57.1295 127.593 59.4487 127.335 62.0257 128.108ZM79.5489 147.435C77.745 147.435 76.1988 147.178 74.395 146.92C76.1988 147.435 77.745 147.951 79.5489 147.435ZM74.1373 130.685C74.1373 130.428 73.6219 130.428 73.3642 130.17C73.1065 130.17 73.1065 129.912 73.1065 129.912C73.1065 129.655 73.3642 129.655 73.3642 129.655C74.1373 129.655 74.6527 129.912 75.1681 129.912C75.4258 129.912 75.4258 130.428 75.6834 130.428C75.4258 130.428 75.1681 130.685 74.9104 130.685C74.6527 130.685 74.6527 130.685 74.1373 130.685ZM58.4179 113.162C58.9333 112.904 59.191 112.647 59.4487 112.389C59.191 112.647 58.6756 112.904 58.4179 113.162ZM59.4487 112.389C59.7064 112.131 59.9641 111.874 60.2218 111.616V111.358C59.9641 111.874 59.7064 112.131 59.4487 112.389ZM83.1566 131.458L83.4143 131.201V131.458H83.1566ZM60.2218 111.358C61.2526 110.585 62.0257 109.554 62.5411 108.524C61.768 109.297 60.9949 110.328 60.2218 111.358ZM106.349 150.528C104.803 150.012 103.514 149.755 101.195 150.27C103.514 150.27 104.803 150.528 106.349 150.528ZM31.1024 69.8695C30.8447 69.8695 30.587 69.6118 30.587 69.3542C30.587 69.0965 30.8447 69.0964 31.1024 68.8388L31.3601 69.0964C31.3601 69.3541 31.1024 69.6118 31.1024 69.8695ZM96.0413 133.262C96.0413 133.262 96.0413 133.262 95.7836 133.005C96.0413 133.005 96.0413 133.005 96.299 133.005V133.262H96.0413ZM54.2948 85.3312C54.0372 85.3312 53.7795 85.0735 53.7795 84.8158C54.0371 84.5581 54.2948 84.3004 54.5525 84.3004C54.8102 84.3004 55.0679 84.5581 54.8102 84.8158C54.8102 85.0735 54.5525 85.3312 54.2948 85.3312ZM70.0142 101.824C72.0757 100.277 73.6219 98.2159 75.4258 96.412C72.8488 97.4428 71.0449 99.2467 70.0142 101.824ZM127.222 153.62C127.222 153.62 127.222 153.62 127.48 153.62C127.48 153.62 127.738 153.878 127.738 153.62C127.995 153.62 127.995 153.362 127.48 153.362L127.222 153.62ZM76.1988 95.6389C78.7758 93.8351 80.8373 91.2581 82.3835 88.4235C80.0642 90.4851 77.745 92.8043 76.1988 95.6389ZM59.191 79.4042C57.9026 79.4042 59.4487 77.6004 62.0257 76.0542C62.2834 75.7965 62.541 75.5388 63.0564 75.2811C63.8295 73.7349 65.118 72.7042 66.4065 71.6734C66.6642 71.4157 67.1795 71.158 67.4372 70.6426C66.9219 71.158 66.6642 71.4157 66.4065 71.6734C65.8911 73.4773 64.6026 74.508 63.0564 75.2811C62.541 75.5388 62.2834 75.7965 62.0257 76.0542C61.2526 77.3427 60.9949 79.1465 59.191 79.4042ZM82.3835 88.4235C82.6412 88.1658 83.1566 87.9081 83.4143 87.6504C82.8989 87.9081 82.6412 88.1658 82.3835 88.4235ZM50.9448 110.843C50.4294 110.585 50.4294 109.297 51.2025 108.524C54.2949 105.174 56.8718 101.824 60.4795 98.989C62.0257 97.4428 63.5718 95.8966 65.118 94.0928C66.4065 92.8043 67.6949 91.2581 68.9834 89.9697C75.4258 83.5273 81.8681 77.085 88.3105 70.3849C89.3412 69.3541 90.6297 67.808 91.6605 66.5195C94.2374 62.6541 97.8451 60.0772 101.968 58.2733C102.226 58.0156 102.484 57.7579 102.741 57.5002C103.257 56.7271 103.514 55.9541 104.03 55.181C104.545 54.4079 105.834 53.8925 105.576 54.4079C105.576 54.9233 105.061 55.4387 104.803 55.6964C104.287 56.4694 103.514 56.9848 102.741 57.5002C102.484 57.7579 102.226 58.0156 101.968 58.2733C100.937 60.8502 99.1336 62.6541 97.0721 63.9426C95.2682 65.231 93.722 66.7772 92.4336 68.5811C92.1759 69.0964 91.9182 69.6118 91.4028 70.1272C87.5374 73.2196 84.7027 77.085 81.095 80.435C80.3219 81.2081 79.5489 81.7235 79.0335 82.7542C73.6219 89.712 66.4065 95.3813 60.4795 102.081C58.6756 104.143 56.8718 106.204 55.0679 108.008C54.2948 108.781 53.7795 109.554 53.0064 110.328C52.491 110.585 51.7179 111.101 50.9448 110.843ZM83.4143 87.6504C83.672 87.3927 83.9297 87.135 84.1874 86.6197C83.9297 86.8774 83.672 87.3927 83.4143 87.6504ZM84.1874 86.6197C84.4451 86.362 84.7027 86.1043 85.2181 85.8466H84.9604C84.7027 86.1043 84.4451 86.362 84.1874 86.6197ZM84.9604 85.8466C86.7643 84.0427 88.5682 82.4965 90.372 80.6927C90.6297 80.435 91.1451 80.1773 90.8874 79.4042C88.5682 81.4658 86.5066 83.2696 84.9604 85.8466ZM73.6219 68.0657C74.395 67.0349 75.1681 66.2618 76.1988 65.4887C76.4565 65.231 76.7142 64.9734 76.9719 64.458C76.7142 64.7157 76.4565 65.231 76.1988 65.4887C75.6834 66.7772 74.9104 67.5503 73.6219 68.0657ZM94.4951 76.0542C94.4951 76.0542 94.7528 76.0542 94.7528 75.7965C94.7528 75.7965 94.7528 75.7965 94.7528 75.5388C94.7528 75.5388 94.4951 75.5388 94.4951 75.7965V76.0542ZM81.6104 59.3041C82.1258 58.7887 82.6412 58.2733 83.1566 57.7579H83.4143C83.4143 58.0156 83.4143 58.0156 83.4143 58.2733C82.8989 58.531 82.1258 58.7887 81.6104 59.3041ZM100.422 69.8695H100.68C101.195 69.3542 101.453 68.5811 101.968 68.0657C101.453 68.5811 100.937 69.0965 100.422 69.6118V69.8695ZM102.741 67.2926C102.999 67.0349 103.514 66.5195 103.772 66.2618C103.257 66.5195 102.999 67.0349 102.741 67.2926ZM103.772 66.2618C104.803 65.7464 105.834 64.9734 106.349 63.6849C105.576 64.458 104.545 65.4887 103.772 66.2618ZM107.122 62.6541C108.411 61.6233 109.957 60.8502 110.472 58.7887C108.668 60.0772 107.895 61.3656 107.122 62.6541ZM88.5682 52.0886C88.8258 51.8309 89.3412 51.5733 89.5989 51.3156C89.8566 51.0579 90.1143 50.8002 90.372 50.2848C90.6297 50.0271 90.8874 49.7694 91.4028 49.5117C91.6605 49.254 91.9182 48.9963 92.1759 48.7386C92.6913 46.6771 93.9797 45.3886 95.7836 44.1001C96.0413 43.8424 96.299 43.5847 96.5567 43.3271C96.8144 43.0694 97.3298 42.8117 97.5875 42.2963C97.8451 42.0386 98.1028 41.7809 98.3605 41.5232C98.6182 41.2655 98.8759 41.0078 99.3913 40.7501C99.649 40.2347 99.9067 39.977 100.164 39.7193C100.68 38.4309 101.195 37.4001 102.226 36.3693C105.061 33.7924 107.638 30.7 110.73 28.3808V28.1231C109.184 32.2462 105.576 34.5654 102.999 37.6578C101.968 38.4309 100.937 38.9462 100.164 39.7193C99.9067 39.977 99.649 40.2347 99.1336 40.4924C98.8759 41.0078 98.6182 41.2655 98.3605 41.5232C98.1028 41.7809 97.8451 42.0386 97.5875 42.2963C97.0721 42.8117 96.8144 43.0694 96.5567 43.3271C96.299 43.5847 96.0413 43.8424 95.7836 44.1001C95.0105 46.1617 93.722 47.4502 92.1759 48.4809C91.9182 48.9963 91.6605 49.254 91.4028 49.5117C90.8874 49.7694 90.6297 50.0271 90.372 50.2848C90.1143 50.8002 89.8566 51.0579 89.5989 51.3156C89.0835 51.5733 88.8258 51.8309 88.5682 52.0886ZM115.626 52.604C115.626 52.3463 115.884 52.3463 116.141 52.0886C115.884 52.3463 115.884 52.3463 115.884 52.3463C115.626 52.3463 115.626 52.604 115.626 52.604ZM116.915 51.3156C117.172 51.0579 117.688 50.8002 117.945 50.2848C117.43 50.8002 117.172 51.0579 116.915 51.3156ZM119.749 48.4809C120.522 47.7078 121.038 46.9348 121.295 45.904C120.522 46.6771 120.007 47.4502 119.749 48.4809ZM121.295 45.904C121.811 45.6463 122.068 45.3886 122.326 45.1309C122.068 45.3886 121.553 45.6463 121.295 45.904ZM113.822 25.5462V25.2884C114.08 25.0308 114.338 25.0308 114.338 25.5462C114.08 25.5462 114.08 25.5462 113.822 25.5462ZM124.903 14.723C124.903 13.4345 125.934 13.6922 126.707 13.1768C126.191 13.6922 125.934 14.4653 124.903 14.723Z"
				fill="white"
				{...k}
			/>
		</svg>
	);
};
