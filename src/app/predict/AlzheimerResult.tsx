import { ResultType } from "./page";

type Props = {
  result: ResultType;
};

const AlzheimerResult = ({ result }: Props) => {
  const { type, prediction } = result;
  return (
    <>
      <p className="leading-relaxed text-lg text-gray-600 text-center mb-4">
        {prediction === "MildDemented"
          ? "You are midly demented"
          : prediction === "ModerateDemented"
          ? "You are modereately demented"
          : prediction === "NonDemented"
          ? "You are not demented"
          : prediction === "VeryMildDemented"
          ? "You are very dememted"
          : ""}
        .{" "}
      </p>

      {prediction === "MildDemented" && (
        <div className="grid gap-y-4 text-gray-600">
          <p className="text-lg mb-3">
            Remember, you&apos;re not alone in this journey, and there are steps
            you can take to improve the quality of life.
          </p>
          <p className="text-lg mb-3">
            Firstly, it&apos;s important to have a medical evaluation to confirm
            the diagnosis and make sure there are no other underlying factors
            causing these changes. Regular check-ups with doctors who specialize
            in neurology or geriatrics will help you monitor how things are
            progressing and adjust your treatment plan if needed.
          </p>
          <p className="text-lg mb-3">
            Medications might be part of your treatment plan. They won&apos;t
            cure Alzheimer&apos;s, but they can help manage some of the symptoms
            and slow down the cognitive decline. Your doctor may discuss options
            like cholinesterase inhibitors or NMDA receptor antagonists with
            you.
          </p>
          <p className="text-lg mb-3">
            Taking care of your body with a healthy diet is also important.
            Foods rich in antioxidants, omega-3 fatty acids, and vitamins
            support brain health. Think about including foods like leafy greens,
            berries, fish, and whole grains in your meals while avoiding
            processed foods and too much sugar.
          </p>
          <p className="text-lg mb-3">
            Staying active is another key aspect. Regular exercise, even if
            it&apos;s just walking or light activities, helps improve blood flow
            to your brain and boosts your mood.
          </p>
          <p className="text-lg mb-3">
            Keeping your mind engaged is crucial too. Try activities like
            puzzles, reading, or learning new things. They stimulate different
            parts of your brain and can help slow down cognitive decline.
          </p>
          <p className="text-lg mb-3">
            Don&apos;t forget the value of social connections. Spending time
            with friends, family, or participating in community activities can
            help keep your mind active and reduce feelings of loneliness.
          </p>
          <p className="text-lg mb-3">
            Sleep plays a big role in your cognitive health too. Create a
            comfortable sleep routine and environment, and aim for a consistent
            sleep schedule.
          </p>
          <p className="text-lg mb-3">
            Stress can impact your mind, so finding ways to manage it is
            important. Practices like mindfulness, meditation, and deep
            breathing exercises can help.
          </p>
          <p className="text-lg mb-3">
            Establishing a daily routine can provide structure and reduce
            confusion. Keeping things consistent, like your meals and
            activities, can help you feel more in control.
          </p>
          <p className="text-lg mb-3">
            As the disease progresses, safety becomes more important. Make sure
            your living environment is safe and consider adding things like
            alarms or locks to prevent accidents.
          </p>
          <p className="text-lg mb-3">
            Remember, you&apos;re not alone in this journey. Caregiver support
            is crucial, so don&apos;t hesitate to reach out for help. There are
            community resources, support groups, and respite care options
            available to support both you and your caregivers.
          </p>
          <p className="text-lg mb-3">
            It&apos;s also a good idea to plan for the future with legal and
            financial matters in mind. Things like advance directives and power
            of attorney can help ensure your wishes are respected.
          </p>
          <p className="text-lg mb-3">
            Just know that there&apos;s support and guidance available to help
            you navigate this challenging journey. Stay connected with
            healthcare professionals, communicate your needs, and don&apos;t
            hesitate to ask for help when you need it. You&apos;ve got this, and
            there&apos;s a community here to support you every step of the way.
          </p>
        </div>
      )}

      {prediction === "ModerateDemented" && (
        <div className="grid gap-y-4 text-gray-600">
          <p className="text-lg mb-3">
            I understand that facing moderate dementia due to Alzheimer&apos;s
            can be overwhelming. In this phase, changes become more noticeable.
            But there are ways to adapt and improve your situation:
          </p>
          <p className="text-lg mb-3">
            Health Check-ups: Regular visits to doctors will help track progress
            and address health concerns.
          </p>
          <p className="text-lg mb-3">
            Medications: Some medicines can help manage symptoms and behaviors.
            Consult your doctors for guidance.
          </p>
          <p className="text-lg mb-3">
            Daily Routine: Having a consistent daily plan can add structure and
            predictability.
          </p>
          <p className="text-lg mb-3">
            Eating and Drinking: Balanced meals and staying hydrated are crucial
            for your well-being.
          </p>
          <p className="text-lg mb-3">
            Getting Help: You might need assistance with tasks like dressing or
            eating, and that&apos;s okay.
          </p>
          <p className="text-lg mb-3">
            Memory Support: Pictures or notes can assist in remembering
            important things.
          </p>
          <p className="text-lg mb-3">
            Staying Active: Gentle exercises can maintain mobility and boost
            your mood.
          </p>
          <p className="text-lg mb-3">
            Keeping Busy: Engaging in simple activities keeps your mind active.
          </p>
          <p className="text-lg mb-3">
            Communication: If words are difficult, gestures and nonverbal
            communication can be effective.
          </p>
          <p className="text-lg mb-3">
            Staying Safe: Ensuring your living space is safe helps prevent
            accidents.
          </p>
          <p className="text-lg mb-3">
            Emotional Well-being: If you&apos;re feeling upset or confused,
            it&apos;s normal. Support is available.
          </p>
          <p className="text-lg mb-3">
            Caregiver Support: Those caring for you need help too. Don&apos;t
            hesitate to ask for assistance.
          </p>
          <p className="text-lg mb-3">
            Professional Care: Sometimes, professionals can provide additional
            support to caregivers.
          </p>
          <p className="text-lg mb-3">
            Legal and Future Plans: Discussing your wishes and planning for the
            future is important.
          </p>
          <p className="text-lg mb-3">
            Remember, a network of support is available. Talk to your doctors,
            caregivers, and trusted individuals. Together, we can navigate this
            journey and improve your quality of life.
          </p>
        </div>
      )}

      {prediction === "NonDemented" && (
        <div className="grid gap-y-4 text-gray-600">
          <p className="text-lg mb-3">
            It&apos;s great that you&apos;re interested in maintaining your
            brain health and reducing the risk of Alzheimer&apos;s disease. Here
            are some suggestions to consider:
          </p>
          <p className="text-lg mb-3">
            Healthy Diet: Prioritize a well-rounded diet with plenty of fruits,
            vegetables, whole grains, lean proteins, and healthy fats. These
            foods support your brain health and overall well-being.
          </p>
          <p className="text-lg mb-3">
            Physical Activity: Regular exercise, including both aerobic and
            strength training, can improve blood flow to your brain and help
            protect against cognitive decline.
          </p>
          <p className="text-lg mb-3">
            Mental Stimulation: Engage your mind with activities like puzzles,
            reading, learning new skills, and problem-solving tasks. Keeping
            your brain active is important.
          </p>
          <p className="text-lg mb-3">
            Social Connections: Spending time with friends, family, and
            participating in social activities can positively impact your brain
            health and keep your mind engaged.
          </p>
          <p className="text-lg mb-3">
            Quality Sleep: Make sure to practice good sleep habits and aim for
            7-9 hours of restful sleep each night to support your cognitive
            function.
          </p>
          <p className="text-lg mb-3">
            Stress Management: Utilize relaxation techniques like meditation,
            deep breathing, or mindfulness to manage stress, which can affect
            your brain health.
          </p>
          <p className="text-lg mb-3">
            Hydration: Staying properly hydrated is essential for your overall
            health and brain function.
          </p>
          <p className="text-lg mb-3">
            Limit Alcohol: If you consume alcohol, do so in moderation, as
            excessive drinking can have negative effects on your brain.
          </p>
          <p className="text-lg mb-3">
            Avoid Smoking: If you smoke, consider quitting, as smoking has been
            linked to cognitive decline and other health issues.
          </p>
          <p className="text-lg mb-3">
            Regular Health Check-ups: Keeping up with routine medical visits
            helps monitor your health and address potential risk factors.
          </p>
          <p className="text-lg mb-3">
            Stay Mentally Active: Engage in activities that challenge your mind,
            such as learning
          </p>
        </div>
      )}

      {prediction === "VeryMildDemented" && (
        <div className="grid gap-y-4 text-gray-600">
          <p className="text-lg mb-3">
            I understand that you&apos;re in the very mild stage of
            Alzheimer&apos;s disease, and I&apos;m here to offer guidance and
            support:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-3">
              <strong>Communication:</strong> I&apos;ll make sure to talk to you
              clearly and give you time to respond. Don&apos;t worry if things
              take a bit longer; I&apos;m here to listen.
            </li>
            <li className="mb-3">
              <strong>Routine:</strong> Let&apos;s establish a routine together.
              Having a daily plan can help things feel more familiar and less
              confusing.
            </li>
            <li className="mb-3">
              <strong>Memory Help:</strong> We can use tools like calendars,
              notes, and reminders to keep track of important things.
            </li>
            <li className="mb-3">
              <strong>Activities:</strong> Doing things you enjoy, like hobbies
              or gentle exercises, can be really good for your mind and body.
            </li>
            <li className="mb-3">
              <strong>Healthy Eating:</strong> Eating a balanced diet is
              important for your overall health, including your brain. I can
              help you make good choices.
            </li>
            <li className="mb-3">
              <strong>Staying Hydrated:</strong> Remember to drink enough water
              to keep yourself hydrated.
            </li>
            <li className="mb-3">
              <strong>Moving Around:</strong> Even simple exercises, like
              walking or chair exercises, can help you feel better.
            </li>
            <li className="mb-3">
              <strong>Connecting with Others:</strong> Spending time with
              friends, family, or support groups can help you stay connected and
              prevent feeling alone.
            </li>
            <li className="mb-3">
              <strong>Safety:</strong> I want to make sure your living space is
              safe and comfortable for you.
            </li>
            <li className="mb-3">
              <strong>Professional Help:</strong> It might be a good idea to
              involve healthcare professionals who specialize in
              Alzheimer&apos;s care. They can provide valuable guidance.
            </li>
            <li className="mb-3">
              <strong>Taking Care of Yourself:</strong> If you&apos;re taking
              care of yourself, that&apos;s important too. Don&apos;t hesitate
              to ask for help or take a break when you need it.
            </li>
            <li className="mb-3">
              <strong>Your Feelings:</strong> If things feel confusing or
              frustrating, that&apos;s okay. I&apos;m here to listen and help
              you through it.
            </li>
            <li className="mb-3">
              <strong>Medication:</strong> We can talk to healthcare
              professionals about medications that might be helpful for managing
              your symptoms.
            </li>
            <li className="mb-3">
              <strong>Planning Ahead:</strong> It could be a good time to
              discuss legal and financial matters, like advance directives,
              while you&apos;re still able to participate.
            </li>
          </ul>
          <p className="text-lg">
            Remember, you&apos;re not alone in this journey. I&apos;m here to
            help, and there&apos;s a supportive network available to guide you
            every step of the way.
          </p>
        </div>
      )}
    </>
  );
};

export default AlzheimerResult;
