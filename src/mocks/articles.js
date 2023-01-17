const CATEGORIES_TYPE = {
  tech: "technology",
  games: "gaming",
  wellbeing: "wellbeing",
  finance: "finance",
  top: "top",
  recent: "recent",
  career: "career",
  all: "all"
};

export const articles = [
  {
    id: "c5d2a482-199c-11ed-861d-0242ac120002",
    title:
      "Transform Your Home into a Smart Home: 5 Ways to Automate Your House",
    description:
      "Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home. In this blog post, we'll give you five ways to transform your home into a smart home, including using smart thermostats, smart lighting, smart appliances, smart security systems, and smart home hubs. Automating your home can make your life easier, save you energy and money, and give you peace of mind. Learn how to get started with home automation today.",
    category: CATEGORIES_TYPE.tech,
    date: "11/25/2022",
    isTopArticle: false,
    image_src:
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    content: (
      <div>
        <h2 className="section-title">Take control of your home</h2>
        <p>
          Are you tired of constantly forgetting to turn off the lights or
          adjust the thermostat when you leave the house? It might be time to
          consider automating your home.
        </p>
        <br />
        <p>
          Home automation refers to the use of technology to control and manage
          the various systems and devices in your home, such as lighting,
          heating and cooling, and appliances. Not only can home automation make
          your life easier and more convenient, it can also help you save energy
          and money.
        </p>
        <br />
        <p>Here are five ways to automate your home:</p>
        <h2 className="section-title">1. Smart thermostats</h2>
        <p>
          A smart thermostat allows you to control the temperature in your home
          remotely using a smartphone app. Some models can even learn your
          schedule and adjust the temperature accordingly, helping you save
          energy and money on your heating and cooling bills.
        </p>
        <h2 className="section-title">2. Smart lighting</h2>
        <p>
          With smart lighting, you can control your lights using a smartphone
          app or voice commands. This allows you to turn lights on and off, dim
          them, or change their color from anywhere in your home. Smart lighting
          can also be programmed to turn off when you leave the house, helping
          you save energy.
        </p>
        <h2 className="section-title">3. Smart appliances</h2>
        <p>
          There are now a variety of smart appliances available, such as
          refrigerators, washing machines, and dryers, that can be controlled
          and monitored using a smartphone app. This can be especially helpful
          for managing your household chores when you&apos;re away from home.
        </p>
        <h2 className="section-title">4. Smart security</h2>
        <p>
          Smart security systems can include door and window sensors, motion
          detectors, and cameras that can be monitored and controlled using a
          smartphone app. This can give you peace of mind when you&apos;re away
          from home and alert you to any potential threats.
        </p>
        <h2 className="section-title">5. Smart home hubs</h2>
        <p>
          If you want to integrate multiple smart home devices, you may want to
          consider using a smart home hub. These devices allow you to control
          and manage all of your smart home devices using a single app or voice
          commands.
        </p>
      </div>
    ),
    writer: "Andre Rodrigues"
  },
  {
    id: "c5d2a482",
    title: "The Top 5 Cybersecurity Threats of 2022: What You Need to Know",
    description:
      "Stay ahead of the curve and protect yourself and your business from the latest cybersecurity threats. In this blog post, we'll outline the top five threats to watch out for in 2022, including ransomware, cloud security breaches, Internet of Things vulnerabilities, supply chain attacks, and artificial intelligence and machine learning attacks. Stay informed and follow best practices to reduce the risk of a cybersecurity incident.",
    category: CATEGORIES_TYPE.tech,
    date: "01/03/2023",
    isTopArticle: true,

    image_src:
      "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    content: (
      <div>
        <h2 className="section-title">The world is changing rapidly</h2>
        <p>
          As technology continues to advance and permeate every aspect of our
          lives, cybersecurity threats are becoming increasingly sophisticated
          and widespread. From ransomware attacks that can cripple businesses to
          supply chain breaches that can compromise entire industries, the risks
          to our personal and professional data are numerous and ever-evolving.
          That&apos;s why it&apos;s more important than ever to stay informed
          about the latest cybersecurity threats and take steps to protect
          yourself and your business. In this article, we&apos;ll provide an
          overview of the top five cybersecurity threats to watch out for in
          2022, so you can be prepared and stay one step ahead of the bad guys.
        </p>
        <h2 className="section-title">1. Ransomware</h2>
        <p>
          Ransomware is a type of malware that encrypts a victim&apos;s files.
          The attacker then demands a ransom from the victim to restore access
          to the files; hence the name ransomware. In recent years, ransomware
          attacks have become more common and more costly, with some attacks
          resulting in millions of dollars in damages. To protect yourself from
          ransomware attacks, it&apos;s important to keep your software and
          systems up to date, regularly back up your data, and be cautious about
          opening suspicious emails or links.
        </p>
        <h2 className="section-title">2. Cloud security breaches</h2>
        <p>
          As more businesses and individuals use cloud-based services to store
          and access data, the risk of cloud security breaches increases.
          Hackers may target cloud servers to access sensitive data or to
          disrupt services. To reduce the risk of a cloud security breach,
          it&apos;s important to use strong passwords, enable two-factor
          authentication, and only store and access data on secure and reputable
          cloud platforms.
        </p>
        <h2 className="section-title">
          3. Internet of Things (IoT) vulnerabilities
        </h2>
        <p>
          The Internet of Things (IoT) refers to the interconnectedness of
          devices and systems, such as smart home devices, industrial control
          systems, and medical devices. While the IoT has many benefits, it also
          introduces new vulnerabilities that can be exploited by hackers. To
          protect yourself from IoT-related threats, it&apos;s important to
          secure your home Wi-Fi network, use strong passwords for your IoT
          devices, and only purchase IoT devices from reputable manufacturers.
        </p>
        <h2 className="section-title">4. Supply chain attacks</h2>
        <p>
          A supply chain attack occurs when a hacker targets a company&apos;s
          supply chain, such as by inserting malware into a software update or
          infiltrating a vendor&apos;s network. Supply chain attacks can be
          difficult to detect and can have severe consequences, such as a data
          breach or the disruption of critical services. To protect against
          supply chain attacks, it&apos;s important for companies to carefully
          vet their vendors and suppliers and to implement strong cybersecurity
          measures throughout their supply chain.
        </p>
        <h2 className="section-title">
          5. Artificial intelligence (AI) and machine learning (ML) attacks
        </h2>
        <p>
          As artificial intelligence (AI) and machine learning (ML) become more
          prevalent, they also introduce new cybersecurity threats. For example,
          hackers may use AI to automate the creation of phishing emails or to
          bypass security measures. To protect against AI- and ML-related
          threats, it&apos;s important to stay up to date with the latest
          developments in these fields and to use AI and ML responsibly and
          ethically.
        </p>
        <h2 className="section-title">Conclution</h2>
        <p>
          By understanding the top cybersecurity threats of 2022, you can take
          steps to protect yourself and your business. Stay vigilant, keep your
          software and systems up to date, and be cautious about opening
          suspicious emails or links. By following these best practices, you can
          reduce the risk of a cybersecurity incident and protect your data and
          systems.
        </p>
      </div>
    ),
    writer: "Andre Rodrigues"
  },
  {
    id: "c5d2a482-532",
    title:
      "Protecting Your Personal Information Online: A Beginner's Guide to Cybersecurity",
    description:
      "In today's digital age, it's crucial to protect your personal information online. In this blog post, we'll provide a beginner's guide to cybersecurity and give you tips on how to keep your data safe. Learn how to use strong, unique passwords, be cautious about the information you share online, use two-factor authentication, recognize phishing scams, keep your software and systems up to date, and use secure networks and connections. Follow these best practices to reduce the risk of identity theft and other cyber threats.",
    category: CATEGORIES_TYPE.tech,
    date: "2023-01-05",
    isTopArticle: false,
    meta_tags: [
      "cybersecurity",
      "personal information",
      "online privacy",
      "identity theft",
      "phishing scams",
      "strong passwords",
      "password management",
      "two-factor authentication",
      "software updates",
      "antivirus software",
      "firewall",
      "secure networks",
      "virtual private network",
      "HTTPS"
    ],
    image_src:
      "https://images.unsplash.com/photo-1563452619267-bc16ef6cecec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    content: (
      <div>
        <p>
          In today&apos;s digital age, it&apos;s important to be aware of the
          risks to your personal information online and to take steps to protect
          yourself. From identity theft to phishing scams, there are many
          threats to your personal data and privacy. In this article, we&apos;ll
          provide a beginner&apos;s guide to cybersecurity and give you some
          tips on how to keep your personal information safe online.
        </p>

        <h2 className="section-title">Use strong, unique passwords</h2>

        <p>
          One of the most basic and important steps you can take to protect your
          personal information online is to use strong, unique passwords for
          each of your online accounts. A strong password should be at least 8
          characters long and include a combination of letters, numbers, and
          special characters. Avoid using personal information, such as your
          name or birthdate, in your passwords. It&apos;s also a good idea to
          use a password manager to store and manage your passwords securely.
        </p>

        <h2 className="section-title">
          Be cautious about the information you share online
        </h2>

        <p>
          Be mindful about the personal information you share online, especially
          on social media and public forums. Avoid sharing sensitive
          information, such as your home address or financial information, and
          be cautious about sharing personal details, such as your full name or
          birthdate. These pieces of information can be used by identity thieves
          to gain access to your accounts or to impersonate you online.
        </p>

        <h2 className="section-title">Use two-factor authentication</h2>

        <p>
          Two-factor authentication (2FA) adds an extra layer of security to
          your online accounts by requiring you to provide a second form of
          authentication, in addition to your password, to log in. This can be a
          code sent to your phone, a security token, or a biometric factor, such
          as your fingerprint or facial recognition. Enabling 2FA can help
          prevent unauthorized access to your accounts, even if your password is
          compromised.
        </p>

        <h2 className="section-title">Be aware of phishing scams</h2>

        <p>
          Phishing scams are fraudulent emails or websites that aim to trick you
          into divulging your personal information, such as your login
          credentials or financial information. These scams often use fake or
          misleading branding to appear legitimate, and they may ask you to
          click on a link or download an attachment. To protect yourself from
          phishing scams, be cautious about opening emails or links from
          unfamiliar sources, and be wary of emails or websites that ask for
          personal information or financial details. It&apos;s also a good idea
          to use a spam filter to block suspicious emails.
        </p>

        <h2 className="section-title">
          Keep your software and systems up to date
        </h2>
        <p>
          Keeping your software and systems up to date is important for
          protecting your personal information online. Software updates often
          include security fixes and patches that can help protect against
          vulnerabilities and threats. Make sure to regularly update your
          operating system, web browsers, and other software, and consider
          setting up automatic updates to ensure you&apos;re always running the
          latest version. Additionally, make sure to use reputable and
          up-to-date antivirus and firewall software to help protect your device
          and network.
        </p>
        <p>
          In addition to updating your software, it&apo;s important to use
          reputable and up-to-date antivirus and firewall software to help
          protect your device and network. Antivirus software helps to detect
          and remove malware, such as viruses and ransomware, that can
          compromise your personal information and damage your device. A
          firewall is a security system that controls incoming and outgoing
          network traffic based on predetermined security rules. By using both
          antivirus and firewall software, you can help prevent malware
          infections and unauthorized access to your device and network.
        </p>
        <br />
        <p>
          It&apos;s also a good idea to keep your internet router and other
          internet-connected devices, such as smart home devices, up to date.
          These devices may have security vulnerabilities that can be exploited
          by hackers, so it&apos;s important to ensure they are running the
          latest software and firmware.
        </p>
        <h2 className="section-title">Use secure networks and connections</h2>
        <p>
          When accessing your personal information online, it&apos;s important
          to use secure networks and connections. Avoid using public Wi-Fi
          networks, as they can be less secure and more vulnerable to threats.
          Instead, use a private or secure network, such as a virtual private
          network (VPN), when accessing sensitive information online. You should
          also make sure to use secure connections when making online
          transactions, such as using HTTPS instead of HTTP.
        </p>
        <h2 className="section-title">Conclusion</h2>
        <p>
          By following these tips and best practices, you can help protect your
          personal information online and reduce the risk of identity theft and
          other cyber threats. Stay vigilant and take steps to secure your
          online accounts and activities, and you can enjoy the benefits of the
          internet with peace of mind.
        </p>
      </div>
    ),
    writer: "Andre Rodrigues"
  },
  {
    id: "d5d6a482-532",
    title:
      "Don't Let Your Vacation be Ruined by a Cyber Attack: How to Secure Your Devices Before You Go",
    description:
      "In this blog post, we'll provide tips on how to secure your devices before you go, including updating your software and devices, using a virtual private network (VPN), enabling two-factor authentication (2FA), and being aware of phishing scams. Follow these best practices to help protect your data and enjoy your vacation with peace of mind.",
    category: CATEGORIES_TYPE.tech,
    date: "2023-01-08",
    isTopArticle: false,

    image_src:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    content: (
      <div>
        <p>
          Traveling abroad can be an exciting and rewarding experience, but
          it&apos;s important to remember that your devices and data may be at
          risk when you&apos;re in a foreign country. From public Wi-Fi networks
          to unfamiliar SIM cards, there are many potential threats to your
          cybersecurity when you&apos;re on the go. In this article, we&apos;ll
          provide some tips on how to secure your devices and protect your
          personal information before you set off on your next vacation.
        </p>

        <h2 className="section-title">Update your software and systems</h2>
        <p>
          Before you leave, make sure to update your operating system, web
          browsers, and other software to the latest versions. Software updates
          often include security fixes and patches that can help protect against
          vulnerabilities and threats. It&apos;s also a good idea to use
          reputable and up-to-date antivirus and firewall software to help
          protect your device and network. Don&apos;t forget to update your
          internet router and other internet-connected devices, such as smart
          home devices, as well.
        </p>

        <h2 className="section-title">Use a virtual private network (VPN)</h2>
        <p>
          A virtual private network (VPN) is a tool that encrypts your internet
          connection and hides your IP address, making it more difficult for
          hackers to track your online activities and steal your personal
          information. When you&apos;re traveling abroad, a VPN can be
          especially useful for protecting your data on public Wi-Fi networks,
          which are often less secure than private networks. There are many VPN
          providers to choose from, so be sure to research and select one that
          offers strong encryption and a good track record of protecting user
          privacy.
        </p>

        <h2 className="section-title">
          Turn off automatic connections to open networks
        </h2>
        <p>
          When traveling, you may come across open Wi-Fi networks, such as those
          in airports or coffee shops. While it can be tempting to connect to
          these networks to save data on your phone plan, they can be less
          secure and more vulnerable to threats. To protect your device and
          data, turn off the automatic connection feature for open networks and
          only connect to networks you trust. Consider using a virtual private
          network (VPN) to encrypt your internet connection and protect your
          data from prying eyes.
        </p>

        <h2 className="section-title">Use strong, unique passwords</h2>
        <p>
          I can&apos;t emphasize this enough: one of the most basic and
          important steps you can take to protect your personal information
          online is to use strong, unique passwords for each of your online
          accounts. A strong password should be at least 8 characters long and
          include a combination of letters, numbers, and special characters.
          Avoid using personal information, such as your name or birthdate, in
          your passwords.
          <br />
          Now, remembering all of them can be a problem, that&apos;s why
          it&apos;s also a good idea to use a password manager to store and
          manage your passwords securely.
        </p>

        <h2 className="section-title">Be aware of phishing scams</h2>
        <p>
          Phishing scams are fraudulent emails or websites that aim to trick you
          into divulging your personal information, such as your login
          credentials or financial information. These scams often use fake or
          misleading branding to appear legitimate, and they may ask you to
          click on a link or download an attachment. To protect yourself from
          phishing scams, be cautious about opening emails or links from
          unfamiliar sources, and be wary of emails or websites that ask for
          personal information or financial details. It&apos;s also a good idea
          to use a spam filter to block suspicious emails.
        </p>
        <h2 className="section-title">Back up your data</h2>
        <p>
          Before you set off on your vacation, it&apos;s a good idea to back up
          your data to ensure that you won&apos;t lose any important information
          if something happens to your device. There are several options for
          backing up your data, including using an external hard drive, cloud
          storage services, or backing up to another device. Choose a method
          that works best for you and your needs, and make sure to regularly
          back up your data to keep it safe and secure.
        </p>
        <p>
          In addition to backing up your data, it&apos;s also a good idea to
          create copies of important documents, such as your passport, travel
          itinerary, and insurance information. You can store these copies
          digitally, or bring physical copies with you on your trip. This can be
          especially useful in the event that you lose your passport or other
          documents while you&apos;re abroad.
        </p>

        <h2 className="section-title">Conclusion</h2>
        <p>
          By following these tips and best practices, you can help protect your
          personal information and devices while traveling abroad. Stay vigilant
          and take steps to secure your online accounts and activities, and you
          can enjoy your vacation with peace of mind. Remember to update your
          software and devices, use a virtual private network (VPN), enable
          two-factor authentication (2FA), and be aware of phishing scams. With
          these precautions in place, you can confidently explore the world and
          stay safe from cyber threats.
        </p>
      </div>
    ),
    writer: "Andre Rodrigues"
  }
];
