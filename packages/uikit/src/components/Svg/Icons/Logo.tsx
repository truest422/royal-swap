import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 63 67" {...props}>
      <rect width="63" height="67" fill="url(#pattern)" />
      <defs>
        <pattern id="pattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.015873 0.0149254)" />
        </pattern>
        <image
          id="image0"
          width="63"
          height="67"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAABDCAYAAAArv91lAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAP6ADAAQAAAABAAAAQwAAAACjx8XGAAAUW0lEQVR4Ae07CXRUVZb3r7VXaslKEhKWEEJAVlsEBwVtFdqNZrrtGfW0iqO4taLDaZ1DO1G03Y54WkdbHR2Q0zC2gFHBacAFxxHGkaVJIDR7DCQhZKlK7ev/f+59lZ+lSIBAEs7pmXd4eb9evXf37b1fAPx/uzgSWAe1Yytgq3hxsAPwFwtxBVTwbi7/X8bByDEXi4aLhncj337/V4KS3CLE//sNqLFeDEIuiuZXw7EiI297FThOEDlx+nCh8O/+TzBfARrvEIc9onGcQeE5oC5xxn9YDXXOoRbAkGt+JBwrEDjxDpUD0JBb6hwvTDFJ9juHmnkkYejae9Biy5KsH0ucYQ4wzDp6DTRNC3jjntm3QdauoaJoyDRP0d1psCwSecNVGmJFs8dOY+oZeM5mN9ifrgSv46+O+VLp0SkCJ/9K4YBXkDsc0zpOcNK1SYN0518V88vhhMsgmt/kOD6ffJ115FBN7xj7JN741Gpjy+yhEACSMrhtBdQarea810WQ72GY0Nz7bhj+2D+lKqIGb74t6qzre+2FfzPoPi+bMu/hOelW3bf1CN/7SHEAOwjjRcH8/J2wwnjhLPYN4Uxq6HvXOX7zjqH+BpeU9xE5M3dGjZ8OEKM/JLTIyoMh88IK4MhDBrwN2qFipTEwyySa31E5TjovqlFYPJh+UWzxV0MIXj0vGGfZNCiaf1tummAzZn3OA5+N+M8bB25EA9ASYc73xN1+54AL4LwJ60uo79n8Vxh58xrUWyF3/nz3BK9psYgaeeTuoOXtnl9c2KcBZf41e9N0F5f1ATI+HMkaMN45LABV0AJBtW3ZokDWKwib4uUFtwFj/h2bf75RMK8ETrBfMFW9AtDIjrSYEnuqyr/15ddhXqzXZf2YHIBUV8H/PsNznyxZfo+M27pKVqSUqB2wzmFxhNFTNDwx0Xnl8ooBuAO4IM1j5WayOlxLRN70dCqTXRC4c9YZpUEF4mvb4+0PLQnmNp/zxrSF503ti6b6Aocpc7nISTeie2Mxct6g0kg6l4/M5RVVS3wfSgYeedSfueNcdqWvOS+Kn3ecLHYK7g94XrwsBfC8wKTT0v/PaAEYCutjcf8vHg44t6MC+hUI+0X1z0ATprt8t5h5y7MCJ5QiJtzfLxBnYLCLbtGugGDACq9dADXRF3x9HlMBqK1xJfqcx+N/pwKGhc+ApMdX/arwLsv0LTRxtlfw7s1Kx9KBYzxFk7EgDiMfaAHnxAiIsgS8JoDvEPZ9MnYjdgPEvSKiT61P/aWzAJ8pCqaXHJlaEbTC4u7fnum5B5i+FlZYm7KdJvtSkTPej4pmAmNJ/Jx29wW12zyvQu51Phh5XytIdhXMJhNkODBjolk3NjZCPJ6AoqLhyCQHwQYNGrYKcGKzDN5qQw/LQHK0hBrdGI4FH3vSn32kG4ZeH4VeZ7tNVlhqcx3WnNUCL/8tpi0xdQPTcQuD68jomMEKGthK45BzZRRy/iYKzktiIFhViAc4SERJO11rU8/6HIC9PAyjH28AVQ6DLMtgMhnBgJpXFAVWrFgB7777LpSUlMDo0aPAEzoF3x6rhGm3Z0LGSA6ad6AAkkQP63hlIJaIojxnhnTX9q3R353qxsppj2fU3fO5gatMYPo3rNhG9ExlHf6Juy2FSSi6PgYlC5LgLBZBFFGeRIiqQiKRRK0lwX9cg7Z9PHgPiNB+UID2QzLEPV1yL1lcD+bpxyGZTILRaIT8YcPAbreCIAhsbs+ePTAM54qLiyEWi8HGjZ+BzW6Da66+Go58FYUdFTYIN+oeTEJF+jTNH1WDD/y6OWP1aVx3THRRkLaiwl0/xyq4ViLjRahxFkZTGiMNpvqwORGYuSwGpbeIkJFlwGsY8seuqpaeebyaPumthR9CVVA21woj5mmQcUkIPH+RIYoCMBXEoGhhPV5pJRgF8XgcZIMBzGYz7uVRmCJs2rQJ1q9fz6xi7NixUF5eDidPnmQuMWFmMUh5YTi+xQgqEqrThoTIaK2zr7A87N0aenl3GnvsY6/MP53bMtsmZVcigBy8bERuUMV6x22yQ4Gyu0Mw8zcJyMiV8e4RJ7FHo1FGkN/vB4vFwhDs378fli1bBjt27ICysrGQXzAMJHcMhl0XhKbtBij+ZTOIuV4IBgLwyScfg8vlAgMyb8+wg4SMkwAlSUJtb4Tq6mq46aabmEUcPnwY1qz5d4wFRVB6WQ6EQjFoq5aZ+ROtpDAkyiTz5htmmR89MSv0QtXX8DTJprMR2T3a0qyjJXZpeCUPwjjGOMHoaCRX94QYTFwUgoLpPMQTYcYkEZdIJGDdunWwatUqyM/Ph7feeosR3traClVV1ciUG8aMSb2Wo7VJ9OfmvQCJjFOQ1GKwa9dO+LhyPTzw4MOQk5MDhYWFkJXpYtonAYRCIYYjMzOTwVXRrQg2E5TdDt7GGGxeZAbPATmlKJ1oqgVAawyr7Xf/80n3Zn2axh6av9e5MyPHOOZr4IWxqM4OjeMqMnqUQda0CFz5cjuY8iOwdOmT8MQTTzBTnDp1KsGC3bt3M00sWbKEEUVlqNFowrliIKKpURAjRmJo3sZMFVpaT7HYYLNZwYlaLy0dS4d4jBVx3ONmjBLztbW1sHjxYqisrISr0dcpNpB1vfDCi0xwl8+aBpIrDnVfmpjpk/aZ3lKjTQLjzZNMd3y4PfS6lxGCfzqZvxc0qdDlfkrgpZtoI6UV3X9oNOcnYMayFjRzCQLBIBw8eADNuAzmz58PDkfqqn3SpEkwbdqlTCAa+R8yQV1VERrCTCQT4EfzJq3RZ4oHP9QdR3eJgdWK8WDECKZp2kOBzYJzFvR9Wk/CINfZunUrC4KzZs1C2HgDrCqwbds2pMEJ468ogFAwDi17DafRjxQYZMFaOEtc/KevIy+xE2GnTf86p2lChiFrG8/xNl0y+kjETF3SAqPmhZnEKQiliMeAgExQp0YDEUQtxbiKQUgDEaM2mXprm4eNxMTMmTMZo5u3fIGvq3jIycLUlZGB8LGQQUYpU5Dmx48fBypaSzKpMPg1NTVQXFwMNlsXmYRLx9lcH4TPH8yEwA8GNtfjj6Yp4bhv4TNNzvdpnh1p78ipsphl15sqMp7EyfTOmTRwYg4nFBTUiBFCSBohM6aeekZmu80RTRS0SIvEOO0h3377rTfB5/OxwLW/phpOYiGzbv1a+PTTj9maDz5YA8//9lnmHiRW8mvK/ZT6KNKTuRMesqjuIwmINyhgGxE/jQfGE74VlmTbs4+5GgoRbKpaKxSHL8BDygy8LcEpQtezcQYVBFljASYSwdITGXKgljJRW7KEAQZfPyiKfsGaMnGDQUbzlyCI/u3xtjOmyEJ27dzJNOxyOhkz2VnZ4AsE4dDBQ6h9uvID+O677yCA7qFrlOYIJzFPgiYmU0InvEmGOzWfREqSIDtp7L3RixOrLWMxeOBx8c5izShoyVtVvG3sjXECEY/xEA1gZOZTlyek+eaWFtbJV10uJxOGxWJmBBKR1EjjLS1tzFooQAlo3jfeeBP8+NrrmDbJ3EswA+yp2gs/XbAAJk2cyFxo3ryfsEKCTJsEQMUPCd3vDzJY5Eq6q9FCsjBq5F5kzAmkl94H9tZoJ94KX7+kuPklMZ+L5gAvTcQQ1NtaNkcnq8YdFsifK7OgRZNkbkRYEIMf5XUqS3Nzs6Fo+HD2Ha3xen2o0YPwzr++DfcvegBKsUApLS1lvk4CoiLG5XSBiKly5MhRWNikaoO5c+cxhkmoFAxb29pQkHECyZrOOOEnjZMyCD8rkHgz+Bsl9kpMX58+ogCKOVUq4/FWtBwro1z28hBX9TUe+dwKstilWSK+eycC6upOwNGjtYxwCljhSBgj8bdw8MABOH68jmmeGCZNrl37IUtfvMCzytDr8aAwuhRAFZ4d8/ep5hbGODFMe3Wh0TMJfdX7K+FXDz/ELILmvLUytB429MkH8YcuYUILuZoXeXmOxnNC5wtExN/bc6BFxJI0gwWw7kynP59qbgaPx8sshOJAOwa2rKwslgKJOOpNp5rgyy+/goaGBrScEPjavVi+fsg0R1qiNblY6PjafUyz+j4aCR8VVdS/+eY/WXwoHz8eA6IJIk0W2PZKNsSifK88dOeLE4yzRYzwP8KUfNaGpgLHttpharkHpZNkPldffwJ2Ytqac/U1KR9G7ZA7HKv9AcaVlTJHuvfe+xgzFCB1Jhrq61nELikZA1XVe8GJOdogp84GZMoUR4jJUDjM8NA+8meaozhB9Rd+gfHjRhhfPh5GjRoFSlSG797MgfZGqvDOyg4Fxml4RFVLSSJnbqkFbccMkAwaQbJFGJNe1PCWLVugpmY//CNWdUQcNTJrP0ZwIpDSEhGu+yYFsRkzZsLkyVPAWy+BmHTBlCkZ2CejNmXGLOX7CKZUwkrC8KBLkCWQtnUBEh6KF47JDtR0EravyICmA1jcMFLPyhAK0CjzcYhko9mz6EgR8kzd14ypq8HKCCBGKYBRHb9/fw0LOrpZ0hgOhTuFQf762mu/g1dfXc72Ut52u11Qs4WDlv8ZxbKF2+0mflgapKKGLCiOceSLL7ZgsLyXmbhu7jRSGmXCwJhR9ZEV9n5qxz3Ex7nwQmvQmjheCimgWdghiKHv+4+GP6fYudoF1ywNg2iOMq0ufuxxaMMDBpmqngGI+SimORMGLdJBU1MTprxmPJPnM+Aqvn+p2xOHQ1/ZIRlxwtQFGK2dqfqB8jkxTTDoFmc9HpZyc/NgOGaRVK6nuIFQUaCxaByqP5Ng9zpkHCHrWaBvDnp+g8wbjqGpTOhIlT2/Tf+ECJuPGmD72zkw65GTSESc1fUUlYnx7o1Mn4ghuBSMyKTnzpvHzLjpiAKV/+SGqI9EzsOB/8iD6QubQcD7iO5w6Lj69DPLgAohCppkbaKEKRIzdWtzEL551wD7PrNCEvM6TjJc3Wno+xkrQw3pe7A0+AeJM992LkGCAUNueLyyKv+JDyb/rAVvWROMYIXyPnbybZ2BbCQ4gUKg4oZyOfl+BIulDc86oH6PmRwaQXIgSCpcMt8DY2b7wZqJlxp4iiTNk6bJtAWepCLiBZ0IvhYN6qpVqN5gg1ZMaxSIz+7haWJAtIoWrefuK/HeJYsZ7/VZ3qXto4+MZF6D7JIYzESNuYvxrI1MEtN6JyG48YhKjSI0MZ6IcbDxOTec+DMx3pNkDRm2uPEwMzIKrkI82GC6ivpFiPgErC5FSjCg4F1dLMRDLIAHqrT9DNE5/iH6FTW8hrunpLXMIDm24Xu2fvwCErczCeCZWFRh9OVhKLvWA478EHBiArWfEgS5A5kqRWw1IcC3q5zooxnknB1k6qNOdRfcHjZMyzrwdY7917eOhIAhieFfihGNa0CD2o9lwUwi6tyMCKnpoFtJos/+lxVqd5sgayTe513lhRGXtqM7pGCpWOgE8K7u+z+64Mg2PIbiPj0ddYBgwqF5hluf1EedZP2zPurz/R7J37UmhVN3MFD3jAs+LnDml8+Z974QknZQNY5hcSieGgKjBa+a6gxwHP07HtHvTTgMDXj04EWjLkBVQSPnJUOK+76AD9y8piYqd9bsvZUx//fD65wWe94XPCdOGTgUfUJKxpLt78qiY5GuxGjCt8IoZixA5gfp3X4XLXgG9IUjnjl/OJK1mx381hwv8oZi7QvRUwMKql/FtDEYnX51GdciXysa9zkeoTtxYFg/GlaDb6R+lTk4uIkfhK9G1dAzxDiJgzFPD42Hs/YpavQ5jLr0ExAsGqgjgQPV0diTkNgQj0YXcKJUSB6iw8afHBTt3n+iIqlF31A5fOM00Lg7+Elq8fWRSPI9RM1aJ/NfA5fcW7N6eUTxv4fHPq37CWggnjEH7AspoYdWH3EH8JVScU+YXP7w0TLniYeexHuZDT2/QyGhxVxIJ4tKaImatljdA2uPuXynMU8Tu+C+xPf7Wh5KaNHlCv4CCrVwQUhTBGuJhBbbFIn6562tcR2/Crbi8ZkbzrTewRTW2TkuGG349GBWoD3afmdcjb2PpVLkQhjW9ypoyYoW3+wLtc7dcKi0VWecxk7N65NHoCQW97T9JpJsvx1jQCsJAAGgEPonCNqDXYmr4dd9Ec8daw9lNjAcxcV4jOYKFPL5Lo3mqcYQXjAAkABaTvkejGmhpSiA+PniTtGNaUXxL28Nee/45Gj+CZ1HfUT0fbf5ZU3jjQbnMswCl2MkxtvFzuqk702U60CLoOPsCcf9yypr3Ju6L547us3usFsP4v1Nbte8FvVHm6dt2J9X0zUH8NOyxilGY+aLeOmKvwDh6D8hnZHejr10qRfCP3+Jq4EX1lU5P+oOs/vzWYGVQ408bmLBJI0T52KNfTPHiROwGBFTYujajlUc1nGKB8PaRvz+j/6Ad+efjuS1dEdGzzeOqR1rsxVVoRzp2ldvWjTpv/2jPRlr9Al9vKW41iHas6byonAr3uPMR9RuDNyIuAduWk74m1U1vhkfPkxGvd9VHiho0+H0NnZB6O3bXuZ+XLp7mMmUN1nkzCMxLNjxlX2C50xNwUTdnk37PtgHUEHu3Ge7ZbLnfoPoeDN9QVIJrly/235X+nz657njDk82yznTFC1RiP83R+KwQsLfNR+PKcE//7D327018POum870zWmf+8182v5+f5w/JbgBf05+Q/pG1Njh9bs+LQP4Od0xDkk7LeANJtZLcjZbeEGemSpwMOBR0OvoeKky6vpJlxYOJv502EPKfF7u1HKVEx1U4KR3/P91vCS6Lk8ncDA/DynzsmScgZpm/3NAr+66j/gi9QpkdshccciYLy+vkTVenkaXFrqpdx/Z6yVeHH/VpFo88A9N03/FM+jYCozZbmT2kk5EvegXBVBikNgtZ3vnukF8GDLNq7xxDF7+jcbqLlXZIVPdTZ6eNY7PUvjYjwaR3x6gh0zzeE3mwrdDqziOitreGx4nsQnn939yegd5xtn/BYNYg28ezssHAAAAAElFTkSuQmCC"
        />
      </defs>
    </Svg>
  );
};

export default Icon;
